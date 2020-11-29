import firebase from "firebase/app";
import "firebase/auth";
import CryptoJS from "crypto-js";

var UserProfile = (function () {
  let setCookie = (name, value) => {
    value = CryptoJS.AES.encrypt(value, firebase.auth().currentUser.uid);
    document.cookie = name + "=" + (value || "") + "; path=/";
  };

  var deleteCookie = (name) => {
    document.cookie = name + "=" + "" + "; path=/";
  };

  let getCookie = (name) => {
    if (firebase.auth().currentUser !== null) {
      let nameEQ = name + "=";
      let ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
          var temp = c.substring(nameEQ.length, c.length);
          temp = CryptoJS.AES.decrypt(temp, firebase.auth().currentUser.uid);
          return temp.toString(CryptoJS.enc.Utf8);
        }
      }
    } else {
      return null;
    }
  };

  var generateSessionId = function () {
    //var id = Math.floor((Math.random() * 999) + 1);
    setCookie("id", "2B");
  };

  var getSessionId = function () {
    return getCookie("id");
  };

  var getUser = function () {
    let checkLoginStatusReactSide = async () => {
      try {
        let user = await UserProfile.checkAuthStatus();
        console.log(user);
        if (user !== null) {
          return {
            name: getName(),
            career: getCareer(),
            idStudent: getIdStudent(),
            email: getEmail(),
            status: getStatus(),
            id: getSessionId(),
          };
        } else {
          return null;
        }
      } catch (err) {
        return null;
      }
    };
    return checkLoginStatusReactSide();
  };

  function checkAuthStatus() {
    return new Promise((resolve, reject) => {
      try {
        firebase.auth().onAuthStateChanged((user) => resolve(user));
      } catch (err) {
        reject(err);
      }
    });
  }

  var setStatus = function (id) {
    setCookie("status", id);
  };

  var getStatus = function () {
    return getCookie("status");
  };

  var deleteUser = function () {
    deleteCookie("email");
    deleteCookie("idStudent");
    deleteCookie("name");
    deleteCookie("status");
    deleteCookie("career");
    deleteCookie("id");
  };

  var getName = function () {
    return getCookie("name"); // Or pull this from cookie/localStorage
  };

  var getCareer = function () {
    return getCookie("career"); // Or pull this from cookie/localStorage
  };

  var getIdStudent = function () {
    return getCookie("idStudent"); // Or pull this from cookie/localStorage
  };

  var getEmail = function () {
    return getCookie("email"); // Or pull this from cookie/localStorage
  };

  var setName = function (name) {
    setCookie("name", name);
    // Also set this in cookie/localStorage
  };
  var setCareer = function (name) {
    setCookie("career", name);
    // Also set this in cookie/localStorage
  };
  var setIdStudent = function (name) {
    setCookie("idStudent", name);
    // Also set this in cookie/localStorage
  };
  var setEmail = function (name) {
    setCookie("email", name);
    // Also set this in cookie/localStorage
  };

  return {
    getName: getName,
    setName: setName,
    getCareer: getCareer,
    setCareer: setCareer,
    getIdStudent: getIdStudent,
    setIdStudent: setIdStudent,
    getEmail: getEmail,
    setEmail: setEmail,
    getUser: getUser,
    setStatus: setStatus,
    getStatus: getStatus,
    generateSessionId: generateSessionId,
    getSessionId: getSessionId,
    deleteUser: deleteUser,
    checkAuthStatus: checkAuthStatus,
  };
})();

export default UserProfile;

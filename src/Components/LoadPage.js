import React, { Component } from "react";

class LoadPage extends Component {
  state = {};
  render() {
    return (
      <div className="row m-auto img-load-page">
        <div className="col-12 tc">
          <img src="../Images/loadPageIcon.png" width="300" height="270" />
        </div>
        <div className="spinner-border text-primary spinner-load-page" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}

export default LoadPage;

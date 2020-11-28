import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class MessageModal extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <Modal show={this.props.isOpen} onHide={this.props.onHide}>
        <Modal.Header closeButton className="headerModal">
          <Modal.Title className="headerModal">{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="tc">
          <p>{this.props.message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.onHide} className="Buttons">Aceptar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MessageModal;

import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalAddAppointment = React.forwardRef((props, ref) => (
    <Modal show={props.isOpen} onHide={props.onHide}>
        <Modal.Header closeButton className="headerModal">
          <Modal.Title className="headerModal">Añadir cita</Modal.Title>
        </Modal.Header>
        <Modal.Body className="tc">
          <form
            id="form-create-appointment"
            name="formCreateAppointment"
            onSubmit={props.onSubmit}
            ref={ref}
          >
            <div className="form-group">
              <label for="date">Fecha de cita</label>
              <input
                name="dateAppointment"
                type="date"
                className="form-control"
                id="date-appointment"
                disabled
                value={props.date}
              />
            </div>
            <div className="form-group">
              <label for="date">Hora de cita</label>
              <input
                name="timeAppointment"
                type="time"
                className="form-control"
                id="time-appointment"
              />
            </div>
            <div className="form-group">
              <label for="detailsAppointment">Detalles</label>
              <input
                name="detailsAppointment"
                type="text"
                className="form-control"
                id="details-appointment"
                aria-describedby="detailHelp"
              />
              <small id="detailHelp" className="form-text text-muted">
                Puede agregar detalles o dejar el espacio vacio.
              </small>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={props.onHide}
            className="Buttons"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            form="form-create-appointment"
            variant="primary"
            className="Buttons"
          >
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
  ));


export default ModalAddAppointment;

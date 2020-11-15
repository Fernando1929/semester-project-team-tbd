import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Add un h4 que estrablezca el patron 00:00 de horas y minutos
function MeetingDatePickerForm(props) {
  // this.state = {
  //   date: new Date("2020", "12", "22"),
  // };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontSize: "30px" }}
        >
          Choose Meeting Date
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ fontSize: "20px", color: "#005792" }}>FROM</h4>

        <DatePicker />
        <h4 style={{ fontSize: "20px", color: "#005792", marginTop: "1rem" }}>
          TO
        </h4>
        <DatePicker />

        <InputGroup className="mb-3" style={{ marginTop: "1.5rem" }}>
          <InputGroup.Prepend>
            <InputGroup.Text>DURATION</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="HH:MM" />
        </InputGroup>
        <h6>**Time Format e.g [01:00] = 1 hour**</h6>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="light">
          Close
        </Button>
        <Button className="btn--primary" variant="primary">
          CREATE
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MeetingDatePickerForm;

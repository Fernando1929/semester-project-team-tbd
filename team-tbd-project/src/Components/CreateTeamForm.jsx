import React from "react";
import {Modal, Button, InputGroup, Form, FormControl} from "react-bootstrap";

function CreateTeamForm(props) {
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
            CREATE TEAM
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 style={{ fontSize: "20px" }}>Team Information</h4>
  
          <InputGroup style={{ marginBottom: "1rem" }}>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i class="fas fa-users fa"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="Team Name" placeholder="Team Name" />
          </InputGroup>
  
          <InputGroup style={{ marginBottom: "1rem" }}>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i class="fas fa-user-plus"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="Members Emails" placeholder="Members Emails" />
          </InputGroup>
          <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="3" />
          </Form.Group>
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
  

export default CreateTeamForm;
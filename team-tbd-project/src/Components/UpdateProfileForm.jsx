import React from "react";
import {Modal, Button, InputGroup, Form, FormControl, Row} from "react-bootstrap";
import placeholder from "../Images/placeholder.png";
import Image from 'react-bootstrap/Image';

function UpdateProfileForm(props) {
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
            UPDATE PROFILE INFORMATION
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row className="justify-content-center">
               <Image src={placeholder} width="300" height="300" roundedCircle />
            </Row>
           <Row className="justify-content-center">
             <Button className="btn--primary" variant="primary" style={{marginTop:"0.5rem"}}>
             UPLOAD PICTURE
            </Button>
           </Row>
          

          {/* Name input */}
          <InputGroup style={{ marginBottom: "1rem" }}>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i class="fas fa-user"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="Name" placeholder="Name" />
          </InputGroup>

          {/* Email input */}
          <InputGroup style={{ marginBottom: "1rem" }}>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i class="far fa-envelope"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="Email" placeholder="Email" />
          </InputGroup>

          {/* Phone Number input */}
          <InputGroup style={{ marginBottom: "1rem" }}>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i class="fas fa-phone-alt"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="Phone Number" placeholder="Phone Number" />
          </InputGroup>

          {/* Location input */}
          <InputGroup style={{ marginBottom: "1rem" }}>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i class="fas fa-map-marker-alt"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="Location" placeholder="Location" />
          </InputGroup>

          <Form.Group controlId="Description">
              <Form.Label>Bio</Form.Label>
              <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="light">
            CLOSE
          </Button>
          <Button className="btn--primary" variant="primary">
            UPDATE
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

export default UpdateProfileForm;

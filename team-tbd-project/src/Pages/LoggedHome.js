import React from "react";
import "../../src/App.css";
import "./Home.css";
import { Container, Row, Col, ModalBody, ModalFooter } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Carousel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

import { InputGroup, FormControl } from "react-bootstrap";
// TODO
// 1. modificar texto para que cuando se achique la pantaya llege un punt que salgan 3... y tabien que suceda cuadno el nombre sea largo
// 2. hacer los bordes mas redondos de los teams buttons
//10/18/2020 BY YERAN: ADDED THE MODAL(POP-UP) FOR THE TEAM CREATION.
function MyVerticallyCenteredModal(props) {
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
        <InputGroup className="mb-3">
          <FormControl placeholder="Description" />
        </InputGroup>
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

function LoggedHome() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Carousel style={{ marginTop: "1rem" }}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../Images/SyncLink Home.gif")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../Images/SyncLink Home 2.gif")}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../Images/SyncLink Home 3.gif")}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <div style={{ backgroundColor: "white", marginTop: "1rem" }}>
        <Container>
          <h2 style={{ paddingTop: "2rem" }}>LATEST TEAMS</h2>
          <Row>
            <Col>
              <center>
                <Container>
                  <Card
                    style={{
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      backgroundColor: "#66D6F5",
                    }}
                  >
                    <i
                      className="fas fa-users fa-5x"
                      style={{ color: "white", marginTop: "2rem" }}
                    ></i>
                    <Card.Body>
                      <Card.Title style={{ color: "white" }}>TEAM 1</Card.Title>
                      <Button variant="light">ACCESS</Button>
                    </Card.Body>
                  </Card>
                </Container>
              </center>
            </Col>
            <Col>
              <center>
                <Container>
                  <Card
                    style={{
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      backgroundColor: "#00BBF0",
                    }}
                  >
                    <i
                      className="fas fa-users fa-5x"
                      style={{ color: "white", marginTop: "2rem" }}
                    ></i>
                    <Card.Body>
                      <Card.Title style={{ color: "white" }}>TEAM 2</Card.Title>
                      <Button variant="light">ACCESS</Button>
                    </Card.Body>
                  </Card>
                </Container>
              </center>
            </Col>
            <Col>
              <center>
                <Container>
                  <Card
                    style={{
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      backgroundColor: "#4993FA",
                    }}
                  >
                    <i
                      className="fas fa-users fa-5x"
                      style={{ color: "white", marginTop: "2rem" }}
                    ></i>
                    <Card.Body>
                      <Card.Title style={{ color: "white" }}>TEAM 3</Card.Title>
                      <Button variant="light">ACCESS</Button>
                    </Card.Body>
                  </Card>
                </Container>
              </center>
            </Col>
            <Col>
              <center>
                <Container>
                  <Card
                    style={{
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      backgroundColor: "#005792",
                    }}
                  >
                    <Card.Body>
                      <i
                        class="far fa-calendar-check fa-5x"
                        style={{
                          color: "white",
                          marginTop: "1rem",
                          marginBottom: "1rem",
                        }}
                      ></i>
                      <Card.Title style={{ color: "white" }}>
                        CREATE TEAM
                      </Card.Title>
                      <Button
                        variant="light"
                        onClick={() => setModalShow(true)}
                      >
                        +
                      </Button>

                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </Card.Body>
                  </Card>
                </Container>
              </center>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default LoggedHome;

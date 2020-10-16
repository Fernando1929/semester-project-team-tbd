import React from "react";
import "../../src/App.css";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Carousel } from "react-bootstrap";
// TODO
// 1. modificar texto para que cuando se achique la pantaya llege un punt que salgan 3... y tabien que suceda cuadno el nombre sea largo
// 2. hacer los bordes mas redondos de los teams buttons

function LoggedHome() {
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
              </center>
            </Col>
            <Col>
              <center>
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
              </center>
            </Col>
            <Col>
              <center>
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
              </center>
            </Col>
            <Col>
              <center>
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
                    <Button variant="light">+</Button>
                  </Card.Body>
                </Card>
              </center>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default LoggedHome;

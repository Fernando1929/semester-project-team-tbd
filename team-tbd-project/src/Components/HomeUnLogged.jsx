import React from "react";
import "../../src/App.css";
import backgroundH from "../Images/newHomeBk.gif";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function HomeUnLogged() {
  return (
    <div>
      <div className="SyncLinkWelcome">
        <Container
          fluid
          className="d-flex align-items-start"
          style={{
            backgroundImage: "url(" + backgroundH + ")",
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            height: "100%",
          }}
        >
          <Row>
            <Col
              style={{
                textAlign: "center",
                marginTop: "50%",
                marginBottom: "35%",
                marginLeft: "18%",
              }}
              sm
            >
              <h1 style={{ fontSize: "7vw" }}>SYNCLINK</h1>
              <h3 style={{ fontSize: "2vw" }}>MEET AT THE PERFECT MOMENT</h3>
              <div>
                <Link
                  to="/SignUp"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <Button
                    className="btn--primary"
                    variant="primary"
                    style={{ fontSize: "2vw", marginBottom: "1rem" }}
                  >
                    GET STARTED
                  </Button>
                </Link>
              </div>
              <div>
                <Link
                  to="/LogIn"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "2vw",
                  }}
                >
                  <Button
                    className="btn--secondary"
                    style={{ fontSize: "2vw" }}
                  >
                    LOG IN
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="LearnMore">
        <Container fluid>
          <Row className="CreateAccount d-flex justify-content-center align-items-center">
            <Col style={{ margin: "3rem" }} xs={3}>
              <i
                class="fas fa-puzzle-piece"
                style={{ color: "white", fontSize: "20vw" }}
              />
            </Col>
            <Col
              className="d-flex justify-content-center"
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
              xs={4}
            >
              <text
                style={{
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "5.8vw",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  CREATE
                </div>
                <div
                  style={{
                    fontSize: "5.8vw",
                  }}
                >
                  ACCOUNT
                </div>
                <div
                  style={{
                    fontSize: "2vw",
                  }}
                >
                  Lorem ipsum dolor sit amet
                </div>
                <div style={{ marginTop: "0.5rem", fontSize: "2vw" }}>
                  <Link
                    to="/LogIn"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <Button
                      className="btn--secondary"
                      variant="primary"
                      style={{
                        margin: "0.5rem",
                        fontSize: "2vw",
                      }}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                  <Link
                    to="/SignUp"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <Button
                      variant="light"
                      style={{
                        outline: "none",
                        border: "none",
                        margin: "0.5rem",
                        fontSize: "2vw",
                      }}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                </div>
              </text>
            </Col>
          </Row>
          <Row
            className="AddSchedule d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "white" }}
          >
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }} xs={4}>
              <text
                style={{
                  textAlign: "right",
                }}
              >
                <div
                  style={{
                    fontSize: "5.8vw",
                    fontWeight: "600",
                    color: "#578DE4",
                  }}
                >
                  ADD
                </div>
                <div
                  style={{
                    fontSize: "5.8vw",
                  }}
                >
                  SCHEDULE
                </div>
                <div
                  style={{
                    fontSize: "2vw",
                  }}
                >
                  Lorem ipsum dolor sit amet
                </div>
              </text>
            </Col>
            <Col
              className="d-flex justify-content-center"
              style={{ margin: "3rem" }}
              xs={4}
            >
              {" "}
              <img
                className="d-block w-100"
                src={require("../Images/LaptopSyncLink.gif")}
                alt="Laptop"
              />
            </Col>
          </Row>
          <Row className="CreateJoinTeam d-flex align-items-center">
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }} xs={6}>
              <text
                style={{
                  textAlign: "right",
                }}
              >
                <div
                  style={{
                    fontSize: "5vw",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  CREATE OR
                </div>
                <div
                  style={{
                    fontSize: "5vw",
                  }}
                >
                  JOIN A TEAM
                </div>
                <div
                  style={{
                    fontSize: "2vw",
                  }}
                >
                  Lorem ipsum dolor sit amet
                </div>
              </text>
            </Col>
            <Col
              className="d-flex justify-content-center"
              style={{ margin: "3rem" }}
              xs={4}
            >
              <i
                class="fas fa-user-plus"
                style={{ color: "white", fontSize: "20vw" }}
              />
            </Col>
          </Row>
          <Row
            className="HaveMeeting d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "white" }}
          >
            <Col
              className="d-flex justify-content-center"
              style={{ margin: "3rem" }}
              xs={4}
            >
              {" "}
              <img
                className="d-block w-100"
                src={require("../Images/TabletSyncLink.gif")}
                alt="Tablet"
              />
            </Col>
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }} xs={4}>
              <text
                style={{
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    fontSize: "5.8vw",
                    fontWeight: "600",
                    color: "#578DE4",
                  }}
                >
                  HAVE
                </div>
                <div
                  style={{
                    fontSize: "5.8vw",
                  }}
                >
                  A MEETING
                </div>
                <div
                  style={{
                    fontSize: "2vw",
                  }}
                >
                  Lorem ipsum dolor sit amet
                </div>
              </text>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomeUnLogged;

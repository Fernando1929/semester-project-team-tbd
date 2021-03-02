import React from "react";
import "../../App/App.css";
import backgroundH from "../../Images/newHomeBk.mp4";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import tablet from "../../Images/TabletSyncLink.mp4";
import monitor from "../../Images/MonitorSyncLink.mp4";

function HomeUnLogged() {
  return (
    <div>
      <div className="SyncLinkWelcome">
      <video width="100%" height="100%" autoPlay loop muted style={{}}>
      <source  src={backgroundH} type="video/mp4"/>
      </video>
        <Container
          fluid
          className="d-flex align-items-start"
          style={{
            position:"absolute",
            paddingTop: "5.5rem",
            top: "0",
            right: "0",
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
              <Link  to="/SignUp">
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
                <Link to="/LogIn">
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
                className="fas fa-puzzle-piece"
                style={{ color: "white", fontSize: "20vw" }}
              />
            </Col>
            <Col
              className="d-flex justify-content-center"
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
              xs={4}
            >
              <div
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
                    fontSize: "1.7vw",
                  }}
                >
                  Take the first step towards organizing your team
                </div>
                <div style={{ marginTop: "0.5rem", fontSize: "2vw" }}>
                  <Link to="/LogIn">
                  <Button
                    className="btn--secondary"
                    variant="primary"
                    style={{
                      margin: "0.5rem",
                      fontSize: "2vw",
                    }}
                  >
                    LOG IN
                  </Button>
                    </Link>
                    <Link to="/SignUp">
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
              </div>
            </Col>
          </Row>
          <Row
            className="AddSchedule d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "white" }}
          >
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }} xs={4}>
              <div
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
                  Add the hours you are unavailable
                </div>
              </div>
            </Col>
            <Col
              className="d-flex justify-content-center"
              style={{ margin: "3rem" }}
              xs={4}
            >
              {" "}
              <video width="100%" height="100%" autoPlay loop muted>
              <source  src={monitor} type="video/mp4"/>
              </video>
            </Col>
          </Row>
          <Row className="ManageTeams d-flex justify-content-center align-items-center">
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }} xs={4}>
              <div
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
                  MANAGE
                </div>
                <div
                  style={{
                    fontSize: "5vw",
                  }}
                >
                  TEAMS
                </div>
                <div
                  style={{
                    fontSize: "2vw",
                  }}
                >
                  Create a team and share it with your group or join a team that
                  was shared to you
                </div>
              </div>
            </Col>
            <Col
              className="d-flex justify-content-center"
              style={{ margin: "3rem" }}
              xs={3}
            >
              <i
                className="fas fa-user-plus"
                style={{ color: "white", fontSize: "20vw" }}
              />
            </Col>
          </Row>
          <Row
            className="HoldMeeting d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "white" }}
          >
            <Col
              className="d-flex justify-content-center"
              style={{ margin: "3rem" }}
              xs={4}
            >
              {" "}
              <video width="100%" height="100%" autoPlay loop muted>
              <source  src={tablet} type="video/mp4"/>
              </video>
            </Col>
            <Col style={{ marginTop: "2rem", marginBottom: "2rem" }} xs={4}>
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontSize: "5.8vw",
                    fontWeight: "600",
                    color: "#578DE4",
                  }}
                >
                  HOLD
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
                  Get together as a team because this project is going to be
                  less bumpy
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomeUnLogged;

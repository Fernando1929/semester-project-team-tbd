import React from "react";
import "../../App/App.css";
import backgroundH from "../../Images/SyncLinkLogged.gif";
import RecentTeams from "../RecentTeams";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
/* TO DO CHANGE THE LINK PATH WHEN THE PROFILE SECTION IS COMPLETED LINE 90*/
/* ADD THE CORRECT LINK PATH WHEN CREATED AT MY SCHEDULE BUTTON LINE 147*/
/* MODIFY THE LINK TO GO TO THE PROPER PAGE TO SHOW THE TEAMS LINE 212*/

function HomeLogged() {
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
                marginBottom: "50%",
                marginLeft: "18%",
              }}
              sm
            >
              <h1 style={{ fontSize: "7vw" }}>SYNCLINK</h1>
              <h3 style={{ fontSize: "2vw" }}>MEET AT THE PERFECT MOMENT</h3>
            </Col>
          </Row>
        </Container>
      </div>
      <RecentTeams />
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
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
              xs={4}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "5.8vw",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  EDIT
                </div>
                <div
                  style={{
                    fontSize: "5.8vw",
                  }}
                >
                  PROFILE
                </div>
                <div
                  style={{
                    fontSize: "2vw",
                  }}
                >
                  Take the first step towards organizing your team
                </div>
                <div style={{ marginTop: "0.5rem", fontSize: "2vw" }}>
                  <Button
                    className="btn--secondary"
                    variant="primary"
                    href="/Profile"
                    style={{
                      margin: "0.5rem",
                      fontSize: "2vw",
                    }}
                  >
                    MY PROFILE
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row
            className="AddSchedule d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "white" }}
          >
            <Col
              style={{
                textAlign: "right",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
              xs={4}
            >
              <div
                style={{
                  fontSize: "5.8vw",
                  fontWeight: "600",
                  color: "#578DE4",
                }}
              >
                EDIT
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
              <div>
                <div>
                  {/* ADD THE CORECT LINK PATH WHEN CREATED AT  MY SCHEDULE BUTTON */}
                  <Link
                    to="/UserSchedule"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button
                      className="btn--primary"
                      variant="primary"
                      style={{
                        margin: "0.5rem",
                        fontSize: "2vw",
                      }}
                    >
                      MY SCHEDULE
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              className="d-flex justify-content-center"
              style={{ margin: "3rem" }}
              xs={4}
            >
              {" "}
              <img
                className="d-block w-100"
                src={require("../../Images/LaptopSyncLink.gif")}
                alt="Laptop"
              />
            </Col>
          </Row>
          <Row className="ManageTeams d-flex justify-content-center align-items-center">
            <Col
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
                textAlign: "right",
              }}
              xs={5}
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
                Create or edit a team and share it with your group or join a
                team that was shared to you
                <div>
                  <Button
                    className="btn--secondary"
                    variant="primary"
                    href="/Teams"
                    style={{
                      margin: "0.5rem",
                      fontSize: "2vw",
                    }}
                  >
                    MY TEAMS
                  </Button>
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
              <img
                className="d-block w-100"
                src={require("../../Images/TabletSyncLink.gif")}
                alt="Tablet"
              />
            </Col>
            <Col
              style={{
                textAlign: "left",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
              xs={4}
            >
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
                Get together as a team because this project is going to be less
                bumpy
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomeLogged;

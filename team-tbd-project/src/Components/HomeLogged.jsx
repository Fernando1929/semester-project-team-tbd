import React from "react";
import "../../src/App.css";
import backgroundH from "../Images/SyncLinkLogged.gif";
import RecentTeams from "../Components/RecentTeams";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import CreateTeamForm from "../Components/CreateTeamForm";
// BY Yeran L Concepcion 10/20/2020:
{
  /* TO DOOOOOOOOOOOOOOOOOOOOOOOO CHANGE THE LINK PATH WHEN THE PROFILE SECTION IS COMPLETED */
  /* ADD THE CORECT LINK PATH WHEN CREATED AT  MY SCHEDULE BUTTON */
  /* MODIFy THE LINK TO GO TO THE PROPER PAGE TO SHOW THE TEAMS LLINE 228*/
}

function HomeLogged() {
  const [modalShow, setModalShow] = React.useState(false);
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
                <Button
                  className="btn--primary"
                  variant="primary"
                  onClick={() => setModalShow(true)}
                  style={{ fontSize: "2vw", marginBottom: "1rem" }}
                >
                  CREATE A TEAM
                </Button>
                <CreateTeamForm
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
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
                  Lorem ipsum dolor sit amet
                </div>
                <div style={{ marginTop: "0.5rem", fontSize: "2vw" }}>
                  {/* TO DOOOOOOOOOOOOOOOOOOOOOOOO CHANGE THE LINK PATH WHEN THE PROFILE SECTION IS COMPLETED */}
                  <Link
                    // to="/LogIn"
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
                      MY PROFILE
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
                  Lorem ipsum dolor sit amet
                </div>
                <div>
                  {/* ADD THE CORECT LINK PATH WHEN CREATED AT  MY SCHEDULE BUTTON */}
                  <Link
                    // to="/LogIn"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
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
                  EDIT YOUR TEAMS
                </div>
                <div
                  style={{
                    fontSize: "2vw",
                  }}
                >
                  Lorem ipsum dolor sit amet
                  <div>
                    {/* MODIFI THE LINK TO GO TO THE PROPER PAGE TO SHOW THE TEAMS 228*/}
                    <Link
                      // to="/LogIn"
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
                        MY TEAMS
                      </Button>
                    </Link>
                  </div>
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

export default HomeLogged;

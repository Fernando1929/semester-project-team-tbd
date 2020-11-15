import React from "react";
import "../../App/App.css";
import backgroundH from "../../Images/TeamBK2.gif";
import MeetingDatePickerForm from "../../Components/MeetingDatePickerForm";
import VotesForm from "../../Components/VotesForm";

import {
  Button,
  Col,
  Container,
  Row,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
// ToDO List:
// 1. Implement remove button for when a leader wants to reamove a member
// 2. For members give them an alert when they vote and remove the vote button affter they do so
// 3. Complete DatePicker
// 4.Control The characters on the Team name and descripiton of the team
// 5. Are U Sure to Remove Candidate (POP UP)
// 6.Find a way to control the lenght of the name so i does not overlap with the bk image

// Dependencies to install: Install New Dependencies npm install react-bootstrap-date-picker,npm i react-notification-timeline

function TeamProfile() {
  const [modalShow, setModalShow] = React.useState(false);
  //Team name
  var teamName = "Team TBD";

  // If is true shows the Leader Team page else show a reagular team member page
  var isLeader = true;

  var counterColors = 0;
  var mostRecentColors = [
    "#66D6F5",
    "#00BBF0",
    "#4993FA",
    "#005792",
    "#66D6F5",
  ];
  var mostRecent = [
    { name: "12 Nov 2020", link: "/Team1" },
    { name: "13 Nov 2020", link: "/Team2" },
    { name: "15 Nov 2020", link: "/Team3" },
    { name: "18 Nov 3030", link: "/Team4" },
    { name: "18 Nov 3030", link: "/Team5" },
  ];
  var Teammembers = [
    { name: "Yeran L Concepción Concepción" },
    { name: "Yaritza M. García Chaparro" },
    { name: "María D. Vilanova García" },
    { name: "Orlando F. Marrero Soto" },
    { name: "Luis F. Quiles Ruiz" },
    { name: "Fernando A. Agosto Quiñones" },
  ];

  var teamStyle = {
    marginTop: "1rem",
    marginBottom: "1rem",
    backgroundColor: mostRecentColors[mostRecent.length],
  };

  return (
    <div>
      <div>
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
                marginTop: "25%",
                marginBottom: "10%",
                marginLeft: "5%",
                marginRight: "50%",
              }}
              sm
            >
              <h1 style={{ fontSize: "6vw", color: "#4993FA" }}>{teamName}</h1>
              <h4
                style={{
                  fontSize: "1.5vw",
                  marginTop: "1rem",
                  fontWeight: "300",
                }}
              >
                Insert Team Description here, this must have a restriction on
                the lenght of the characters/ TODO
              </h4>
              <div>
                {isLeader ? (
                  <h1>
                    <Button
                      className="btn--secondary"
                      variant="primary"
                      style={{
                        fontSize: "2vw",
                        marginBottom: "3rem",
                        marginTop: "5%",
                        backgroundColor: "#005792",
                      }}
                      onClick={() => setModalShow(true)}
                    >
                      New Meeting
                    </Button>
                  </h1>
                ) : (
                  <hi>
                    <Button
                      className="btn--secondary"
                      style={{
                        fontSize: "2vw",
                        marginBottom: "1rem",
                        marginTop: "2rem",
                        backgroundColor: "#005792",
                      }}
                      onClick={() => setModalShow(true)}
                    >
                      VOTE NOW
                    </Button>

                    <h4
                      style={{
                        color: "#FF5050",
                        fontSize: "1vw",
                        marginBottom: "1rem",
                      }}
                    >
                      Your have been requested to select a meeting date.
                    </h4>
                  </hi>
                )}

                {isLeader ? (
                  <MeetingDatePickerForm
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                ) : (
                  <VotesForm
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="LearnMore">
        <Container fluid>
          <h2 style={{ color: "white", marginTop: "1rem" }}>UPCOMING EVENTS</h2>

          <Row>
            {mostRecent.map((team) => {
              teamStyle = {
                marginTop: "0.5rem",
                marginBottom: "2rem",
                height: "50px",

                backgroundColor: mostRecentColors[counterColors],
              };
              counterColors++;
              return (
                <Col key={team.name}>
                  <center>
                    <Card
                      style={{
                        width: "18rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <Card.Body>
                        <Card.Title
                          style={{ fontSize: "30px", fontWeight: "400" }}
                        >
                          {" "}
                          {team.name}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Meting Title
                        </Card.Subtitle>
                        <Card.Text>
                          Some quick description text to build and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="/UserSchedule">
                          View on Schedule
                        </Card.Link>
                      </Card.Body>
                    </Card>
                  </center>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <div
        style={{
          fontSize: "2vw",
          fontWeight: "200",
          backgroundColor: "white",
        }}
      >
        <h2
          style={{ marginLeft: "20px", color: "#005792", paddingTop: "1rem" }}
        >
          TEAM MEMBERS
        </h2>
        <ListGroup
          variant="flush"
          style={{ marginRight: "1rem", marginLeft: "1rem" }}
        >
          {Teammembers.map((member) => {
            return (
              <ListGroupItem key={member.name} style={{ fontSize: "30px" }}>
                {member.name}

                <Row>
                  <Button
                    className="btn--secondary ml-auto p-2"
                    // change to later when the remove button is implemented
                    // href="/SignUp"
                    variant="primary"
                    style={{
                      backgroundColor: "white",
                      color: "#FF5050",
                      marginTop: "-3%",
                      size: "10px",
                    }}
                  >
                    REMOVE
                  </Button>
                </Row>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
}

export default TeamProfile;

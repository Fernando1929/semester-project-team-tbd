import React, { useState } from "react";
import "../../App/App.css";
import backgroundH from "../../Images/TeamBK2.gif";
import MeetingDatePickerForm from "../../Components/MeetingDatePickerForm";
import VotesForm from "../../Components/VotesForm";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import {
  Button,
  Col,
  Container,
  Row,
  Card,
  ListGroup,
  ListGroupItem,
  InputGroup,
  FormControl,
} from "react-bootstrap";
// ToDO List:
// 1. Implement remove button for when a leader wants to reamove a member
// 2. For members give them an alert when they vote and remove the vote button affter they do so
// 3. Complete DatePicker---------------------------------------------------------------------------------DONE
// 4.Control The characters on the Team name and descripiton of the team------------------------------Done
// 5. Are U Sure to Remove Candidate (POP UP)
// 6.Find a way to control the lenght of the name so i does not overlap with the bk image-------------Done
// 7. pq el navbar no corre luego que lo abres una vez
// 8. Poner el boton en base al el voto------------------------Done

// Dependencies to install: Install New Dependencies npm install react-bootstrap-date-picker,npm i react-notification-timeline, npm i react-confirm-alert

function TeamProfile() {
  const [modalShow, setModalShow] = React.useState(false);

  const [em, setEmail] = useState("");
  const memberList = [
    { name: "Maria", email: "LaDuraka@gmail.com" },
    { name: "Luis", email: "ElPapichulo@hotmail.com" },
    { name: "Fernando", email: "Meeps@yahoo.com" },
  ];

  const addMember = (e) => {
    e.preventDefault();
    console.log("Add a member", em);
  };

  // If is true shows the Leader Team page else show a reagular team member page
  var isLeader = true;
  // To control if user voted and wether or not we whow "your vote is required" message
  var voted = true;

  var counterColors = 0;
  var mostRecentColors = [
    "#66D6F5",
    "#00BBF0",
    "#4993FA",
    "#005792",
    "#66D6F5",
  ];

  //Team name
  var teamName = "Tbd";
  var teamDes =
    " Iaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaanimooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo ";
  var imageStyle = { marginTop: "55%", marginBottom: "60%", marginLeft: "18%" };
  if (teamName.length < 8) {
    imageStyle = { marginTop: "80%", marginBottom: "150%", marginLeft: "18%" };
    // var temp = imageStyle.marginBottom.substr(
    //   0,
    //   imageStyle.marginBottom.length - 1
    // );
    // imageStyle.marginBottom = parseInt(temp) + (8 - teamName.length) * 9 + "%";
    // temp = imageStyle.marginTop.substr(0, imageStyle.marginTop.length - 1);
    // imageStyle.marginTop = parseInt(temp) + (8 - teamName.length) * 9 + "%";
  } else {
    imageStyle = { marginTop: "80%", marginBottom: "80%", marginLeft: "18%" };
  }

  var mostRecent = [
    { name: "12 Nov 2020" },
    { name: "13 Nov 2020" },
    { name: "15 Nov 2020" },
    { name: "18 Nov 3030" },
    { name: "18 Nov 3030" },
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
  // To show alert when the leader wants to remove a candidate

  const submit = () => {
    confirmAlert({
      title: <h2 style={{ textAlign: "Start" }}>Remove Member</h2>,
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => alert("Your Changes will be permanent"),
        },
        {
          label: "No",
          onClick: () => alert("The member will not be removed"),
        },
      ],
    });
  };

  return (
    <div className="TeamProfile">
      <div>
        <Container
          fluid
          className="d-flex align-items-start "
          style={{
            maxWidth: "auto",
            backgroundImage: "url(" + backgroundH + ")",
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            height: "100%",
          }}
        >
          <Row>
            <Col style={imageStyle} sm>
              <h1
                style={{
                  fontSize: "6vw",
                  color: "#4993FA",
                  // marginTop: "40%",
                }}
              >
                {teamName.length > 9
                  ? teamName.substring(0, 8) + "..."
                  : teamName}
              </h1>

              <div>
                {isLeader ? (
                  <Button
                    className="btn--secondary"
                    variant="primary"
                    style={{
                      fontSize: "2vw",
                      whiteSpace: "nowrap",
                      backgroundColor: "#005792",
                      // marginBottom: "140%",
                    }}
                    onClick={() => setModalShow(true)}
                  >
                    New Meeting
                  </Button>
                ) : (
                  <hi>
                    {voted ? (
                      <Button
                        className="btn--secondary"
                        style={{
                          fontSize: "2vw",

                          backgroundColor: "#005792",
                          whiteSpace: "nowrap",
                          marginBottom: "1rem",
                        }}
                        onClick={() => setModalShow(true)}
                      >
                        VOTE REQUIRED
                      </Button>
                    ) : (
                      <h1
                        style={{
                          fontSize: "2vw",
                          marginBottom: "3.5em",
                          marginTop: "2rem",
                        }}
                      ></h1>
                    )}
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
          <Row className="AddSchedule d-flex justify-content-start align-items-center">
            <Card
              className="text-center"
              style={{
                marginRight: "1%",
                marginLeft: "1%",
                marginTop: "1%",
              }}
            >
              <Card.Body>
                <Card.Title>Description</Card.Title>
                <Card.Text>
                  <h3
                    style={{
                      fontSize: "1.2vw",

                      fontWeight: "400",
                    }}
                  >
                    {teamDes}
                  </h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>

          <h2 style={{ color: "white", marginTop: "1%" }}>UPCOMING EVENTS</h2>

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
                    variant="primary"
                    onClick={submit}
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
        <Row>
          <Col>
            <InputGroup style={{ marginBottom: "1rem" }}>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="fas fa-lock"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="email"
                id="Email"
                placeholder="Email"
                value={em}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col>
            <div className="text-center" style={{ display: "flex-end" }}>
              <Button
                className="btn--primary"
                variant="primary"
                onClick={(e) => addMember(e)}
                style={{ float: "right" }}
              >
                +
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TeamProfile;

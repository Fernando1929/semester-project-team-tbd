import React from "react";
import "../../App/App.css";
import backgroundH from "../../Images/TeamBK2.gif";
// import DatePicker from "react-datepicker";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

// Install New Dependenciesnpm install react-bootstrap-date-picker

// ToDO fix the letter size of the team nave pq cuando el nombre es mas largo los botones se ruedan al otro div
function TeamProfile() {
  const [modalShow, setModalShow] = React.useState(false);
  //testing var for the scroller
  const child = { width: `30em`, height: `100%` };
  const parent = { width: `60em`, height: `100%` };

  //Team name
  var teamName = "Team TBD";

  //end of testing var
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
      {/* <MeetingDatePicker /> */}
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
                // textAlign: "center",
                marginTop: "10%",
                marginBottom: "18%",
                marginLeft: "5%",
                marginRight: "50%",
              }}
              sm
            >
              <h1 style={{ fontSize: "7vw", color: "#005792" }}>{teamName}</h1>
              <h3 style={{ fontSize: "2vw" }}>
                Insert Team Description here, this must have a restriction on
                the lenght of the characters/ TODO
              </h3>
              <div>
                <Button
                  href="/SignUp"
                  className="btn--primary"
                  variant="primary"
                  style={{
                    fontSize: "2vw",
                    marginBottom: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  New Meeting
                </Button>
              </div>
              {/* <div>
                <Button
                  href="/LogIn"
                  className="btn--secondary"
                  style={{ fontSize: "2vw" }}
                >
                  LOG IN
                </Button>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>

      <div className="LearnMore">
        <Container fluid>
          <h2 style={{ color: "white" }}>UPCOMING EVENTS</h2>

          <Row>
            {mostRecent.map((team) => {
              teamStyle = {
                marginTop: "0.5rem",
                marginBottom: "3rem",
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
                        marginTop: "1rem",
                        marginBottom: "3rem",
                      }}
                    >
                      <Button
                        className="btn--secondary"
                        // change to schedule
                        href="/SignUp"
                        variant="primary"
                        style={teamStyle}
                      >
                        {team.name}
                      </Button>
                      <Card.Body>
                        <Card.Title
                          style={{ marginTop: "-3rem", marginBottom: "2rem" }}
                        >
                          Meeting Title
                        </Card.Title>
                        <Card.Text
                          style={{ marginTop: "-2rem", marginBottom: "3rem" }}
                        >
                          Description
                        </Card.Text>
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
        <h2 style={{ marginLeft: "20px", color: "#005792" }}>TEAM MEMBERS</h2>
        <ListGroup
          variant="flush"
          style={{ marginRight: "1rem", marginLeft: "1rem" }}
        >
          {Teammembers.map((member) => {
            return (
              <ListGroupItem key={member.name}>
                {member.name}

                <Row>
                  <Button
                    className="btn--secondary ml-auto p-2"
                    // change to remove from
                    // href="/SignUp"
                    variant="primary"
                    style={{
                      backgroundColor: "#ec0101",
                      marginTop: "-3%",
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

import React, { useState, useEffect } from "react";
import "../../App/App.css";
import Auth from "../../utils/Auth";
import backgroundH from "../../Images/TeamBK2.gif";
import MeetingDatePickerForm from "../../Components/MeetingDatePickerForm";
import VotesForm from "../../Components/VotesForm";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { teamGetAllInfoHandler, getUserIdByEmailHandler } from "../../Apis/Teams";
import { addTeamMemberHandler, getMemberIdByUserIdHandler } from "../../Apis/TeamMembers";
import { getTeamLeaderUserIdHandler } from "../../Apis/TeamLeader";
import { addTeamMembershipHandler, membershipDeleteHandler } from "../../Apis/TeamMembership";
import { getMostRecentEventsHandler } from "../../Apis/TeamSchedule";
import { getMeetingOptions } from "../../Apis/MeetingOptions";

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

const mapTeamMemberData = member => ({
  id: member.team_member_id,
  name: member.user_firstname + " " + member.user_lastname,
  email: member.email
});

const mapRecentEventsData = event => ({
  id: event.team_schedule_id,
  date: formatDate(event.start_date_time),
  start_hour: new Date(event.start_date_time).toLocaleTimeString(),
  end_hour: new Date(event.end_date_time).toLocaleTimeString(),
  title: event.event_title
});

const formatDate = date => {
  var formattedDate = new Date(date).toDateString().split(" ");
  formattedDate = formattedDate[2] + "-" + formattedDate[1] + "-" + formattedDate[3];
  return formattedDate;
}

function TeamProfile(props) {

  const { match: { params } } = props;
  const [modalShow, setModalShow] = React.useState(false);
  const [em, setEmail] = useState("");
  // const [data, setData] = useState([]);
  const [team_members, setTeamMembers] = useState([]);
  const [recent_events, setRecentEvents] = useState([]);
  const [team_name, setTeamName] = useState("");
  const [team_description, setTeamDescription] = useState("");
  const [is_leader, setIsLeader] = useState(false);
  const [showVoting, setVoting] = useState(false);

  useEffect(() => {
    // remember to set boolean values (is_leader, voted) and recent events from schedule
    teamGetAllInfoHandler(params.teamid).then((res) => {
      if (res.status === 200) {
        const info = res.data.data.team;
        // setData(info);
        setTeamMembers(info.map(mapTeamMemberData));
        setTeamName(info[0].team_name);
        setTeamDescription(info[0].team_description);
      }
    });  
  }, [params.teamid]);

  useEffect(() => {
    getTeamLeaderUserIdHandler(params.teamid).then((res) => {
      if (res.status === 200) {
        if (res.data.data.user.user_id === parseInt(Auth.getUserid())) {
          setIsLeader(true);
        }
      }
    });
  }, [params.teamid]);

  useEffect(() => {
    getMeetingOptions(params.teamid).then((res) => {
      if (res.status === 200) {
        if (res.data.results !== 0) {
          setVoting(true);
        }
      }
    });
  }, [params.teamid]);

  useEffect(() => {
    getMostRecentEventsHandler(params.teamid).then((res) => {
      if (res.status === 200) {
        const events = res.data.data.events;
        setRecentEvents(events.map(mapRecentEventsData));
      }
    });
  }, [params.teamid]);

  const addMember = (e) => {
    e.preventDefault();
    getUserIdByEmailHandler(em).then((res => {
      if (res.status === 200) {
        const user_id = res.data.data.user.user_id;
        addTeamMemberHandler(user_id).then((res) => {
          if (res.status === 201) {
            const team_membership = {
              team_id: params.teamid,
              team_member_id: res.data.team_member_id
            }
            addTeamMembershipHandler(team_membership).then((res) => {
              if (res.status === 201) {
                console.log("new member added"); //woop
                window.location.assign(`/TeamProfile/${params.teamid}`);
              }
            });
          }
          else {
            getMemberIdByUserIdHandler(user_id).then((res) => {
              if (res.status === 200) {
                const team_membership = {
                  team_id: params.teamid,
                  team_member_id: res.data.data.team.team_member_id
                }
                addTeamMembershipHandler(team_membership).then((res) => {
                  if (res.status === 201) {
                    console.log("new member added"); //woop
                    window.location.assign(`/TeamProfile/${params.teamid}`);
                  }
                });
              }
            });
          }
        });
      }
    }));
  };

  // If is true shows the Leader Team page else show a reagular team member page
  // var isLeader = false;
  // To control if user voted and wether or not we whow "your vote is required" message
  // var voted = true;

  var counterColors = 0;
  var mostRecentColors = [
    "#66D6F5",
    "#00BBF0",
    "#4993FA",
    "#005792",
    "#66D6F5",
  ];

  // var mostRecent = [
  //   { id: 1, name: "12-Nov-2020" },
  //   { id: 2, name: "13-Nov-2020" },
  //   { id: 3, name: "15-Nov-2020" },
  //   { id: 4, name: "18-Nov-2020" },
  //   { id: 5, name: "18-Nov-2020" },
  // ];

  var imageStyle = { marginTop: "55%", marginBottom: "60%", marginLeft: "18%" };
  if (team_name.length < 8) {
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

  var teamStyle = {
    marginTop: "1rem",
    marginBottom: "1rem",
    backgroundColor: mostRecentColors[recent_events.length],
  };
  // To show alert when the leader wants to remove a candidate

  const removeMember = (member_id, e) => {
    e.preventDefault();
    confirmAlert({
      title: <h2 style={{ textAlign: "Start" }}>Remove Member</h2>,
      message: "Are you sure to do this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleMemberRemove(member_id),
        },
        {
          label: "No",
          onClick: () => alert("The member will not be removed"),
        },
      ],
    });
  };

  const handleMemberRemove = (member_id) => {
    alert("Your Changes will be permanent");
    const team_membership = {
      team_id: params.teamid,
      team_member_id: member_id
    }
    console.log(team_membership);
    membershipDeleteHandler(team_membership).then((res) => {
      if (res.status === 204) {
        console.log("membership deleted");
        alert("Team member removed.");
        window.location.assign(`/TeamProfile/${params.teamid}`);
      }
    });
  }

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
                {team_name.length > 9
                  ? team_name.substring(0, 8) + "..."
                  : team_name}
              </h1>

              <div>
                {is_leader ? (
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
                  <h1>
                    {showVoting ? (
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
                  </h1>
                )}

                {is_leader ? (
                  <MeetingDatePickerForm
                    {...props}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                ) : (
                  <VotesForm
                    {...props}
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
                    {team_description}
                  </h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>

          <h2 style={{ color: "white", marginTop: "1%" }}>UPCOMING EVENTS</h2>

          <Row>
            {recent_events.map((event) => {
              teamStyle = {
                marginTop: "0.5rem",
                marginBottom: "2rem",
                height: "50px",

                backgroundColor: mostRecentColors[counterColors],
              };
              counterColors++;
              return (
                <Col key={event.id}>
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
                          {event.title}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {event.date}
                        </Card.Subtitle>
                        <Card.Text>
                          {event.start_hour + " - " + event.end_hour}
                        </Card.Text>
                        <Card.Link href={`/UserSchedule/${event.date}`}>
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
          {team_members.map((member) => {
            return (
              <ListGroupItem key={member.name} style={{ fontSize: "30px" }}>
                {member.name}

                <Row>
                  <Button
                    className="btn--secondary ml-auto p-2"
                    variant="primary"
                    onClick={(e) => removeMember(member.id, e)}
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

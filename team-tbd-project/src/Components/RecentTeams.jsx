import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CreateTeamForm from "../Components/CreateTeamForm";
import { getRecentUserTeamsHandler } from "../Apis/Teams"

// TODO
// 1. modificar texto para que cuando se achique la pantaya llege un punt que salgan 3... y tabien que suceda cuadno el nombre sea largo
// 2. hacer los bordes mas redondos de los teams buttons
// 10/18/2020 BY YERAN: ADDED THE MODAL(POP-UP) FOR THE TEAM CREATION.

function RecentTeams() {
  const [modalShow, setModalShow] = React.useState(false);
  const [userTeams, setUserTeams] = React.useState([]);

  React.useEffect(() =>{//Requested before the page is loaded
    getRecentUserTeamsHandler().then(res =>{//handler get the teams
      if (res.status === 200){
        // console.log(res.data.data.teams);
        setUserTeams(res.data.data.teams);
      }else{//prints errors
        console.log(res.msg);
      }
    }
    )
  },[]);

  // var mostRecent = [
  //   { name: "Team1", link: "/TeamProfile" },
  //   { name: "Team2", link: "/TeamProfile" },
  //   { name: "Team3", link: "/TeamProfile" },
  // ];

  var counterColors = 0;
  var mostRecentColors = ["#66D6F5", "#00BBF0", "#4993FA", "#005792"];

  var teamStyle = {};
  var createTeamStyle = {
    marginTop: "1rem",
    marginBottom: "3rem",
    backgroundColor: mostRecentColors[userTeams.length],
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <Container>
        <h2 style={{ paddingTop: "2rem" }}>LATEST TEAMS</h2>
        <Row>
          {userTeams.map((team) => {
            teamStyle = {
              marginTop: "1rem",
              marginBottom: "3rem",
              backgroundColor: mostRecentColors[counterColors],
            };
            counterColors++;
            return (
              <Col key={team.team_id}>
                <center>
                  <Container>
                    <Card style={teamStyle}>
                      <i
                        className="fas fa-users fa-5x"
                        style={{ color: "white", marginTop: "2rem" }}
                      ></i>
                      <Card.Body>
                        <Card.Title style={{ color: "white" }}>
                          {team.team_name}
                        </Card.Title>
                        <Button variant="light" to={`/TeamProfile/${team.team_id}`}>
                          ACCESS
                        </Button>
                      </Card.Body>
                    </Card>
                  </Container>
                </center>
              </Col>
            );
          })}

          <Col>
            <center>
              <Container>
                <Card style={createTeamStyle}>
                  <Card.Body>
                    <i
                      className="far fa-calendar-check fa-5x"
                      style={{
                        color: "white",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                      }}
                    ></i>
                    <Card.Title style={{ color: "white" }}>
                      CREATE TEAM
                    </Card.Title>
                    <Button variant="light" onClick={() => setModalShow(true)}>
                      +
                    </Button>

                    <CreateTeamForm
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
  );
}
export default RecentTeams;

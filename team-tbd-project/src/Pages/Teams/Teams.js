import React, { useState } from "react";
import { Container, Card, Button, Nav, CardDeck } from "react-bootstrap";
import "../../App/App.css";
import {getUserTeamsHandler} from "../../Apis/Teams";
import { withRouter} from "react-router-dom";

function Teams(props) {
  const [userTeams, setUserTeams] = useState([]);

  React.useEffect(() =>{//Requested before the page is loaded
    getUserTeamsHandler().then(res =>{//handler get the teams
      if (res.status === 200){
        setUserTeams(res.data.data.teams);
      }else{//prints errors
        console.log(res.msg);
      }
    }
    )
  },[]);

  return (
    <div className="Teams">
      <Container>
        <Card style={{ marginTop: "5rem", marginBottom: "5rem" }}>
          <Card.Header>
            <Nav fill variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link onClick={() => {props.history.push("/Profile")}}>General Info</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => {props.history.push("/Teams")}}>Teams</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>

          <Card style={{ borderRadius: "15px", marginTop: "1rem" }}>
            <CardDeck style={{ color: "white", marginLeft: "4rem" }}>
              {userTeams.map((team) => {
                return (
                  <center key={team.team_id}>
                    <Card
                      style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        backgroundColor: "#66D6F5",
                        width: "10em",
                      }}
                    >
                      <i
                        className="fas fa-users fa-5x"
                        style={{ color: "white", marginTop: "2rem" }}
                      ></i>
                      <Card.Body>
                        <Card.Title style={{ color: "white" }}>
                          {" "}
                          {team.team_name}{" "}
                        </Card.Title>
                        <Button variant="light" href={`/TeamProfile/${team.team_id}`}>
                          ACCESS
                        </Button>
                      </Card.Body>
                    </Card>
                  </center>
                );
              })}
            </CardDeck>
          </Card>
        </Card>
      </Container>
    </div>
  );
}

export default withRouter(Teams);

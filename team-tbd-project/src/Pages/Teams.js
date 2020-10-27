import React from "react";
import { Container, Card, Button, Nav, CardDeck } from "react-bootstrap";
import "../App.css";

function Teams() {
  //Poner los todos teams del usuario.
  var userTeams = [
    { name: "Team1", link: "/Team1" },
    { name: "Team2", link: "/Team2" },
    { name: "Team3", link: "/Team3" },
    { name: "Team4", link: "/Team4" },
    { name: "Team5", link: "/Team5" },
  ];

  return (
    <div className="Teams">
      <Container>
        <Card style={{ marginTop: "5rem", marginBottom: "5rem" }}>
          <Card.Header>
            <Nav fill variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="./Profile">General Info</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#first">Teams</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>

          <Card style={{ borderRadius: "15px", marginTop: "1rem" }}>
            <CardDeck style={{ marginLeft: "4rem" }}>
              {userTeams.map((team) => {
                return (
                  <center>
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
                          {team.name}{" "}
                        </Card.Title>
                        <Button variant="light" href={team.link}>
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

export default Teams;

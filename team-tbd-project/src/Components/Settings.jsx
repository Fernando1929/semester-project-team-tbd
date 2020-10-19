import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Jumbotron,
  InputGroup,
  FormControl,
  Badge,
  Nav

} from "react-bootstrap";

import "../App.css";
import mainLogo from "../Images/HomeBackground.jpg";
import Image from 'react-bootstrap/Image';
import CardDeck from 'react-bootstrap/CardDeck'


class Settings extends Component {
  emailIcon = (<i className="fab fa-user"></i>);

  render() {
    return (
<Container>
  <Card style={{marginTop: "5rem"}}>
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
        
    <Card style={{ borderRadius: "15px", marginTop: "1rem"}}>
                  
                  <CardDeck style={{marginLeft: "4rem"}}>
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
                          <Card.Title style={{ color: "white" }}>TEAM 1</Card.Title>
                          <Button variant="light">ACCESS</Button>
                        </Card.Body>
                      </Card>
                    </center>

                    <center>
                      <Card
                        style={{
                          marginTop: "1rem",
                          marginBottom: "1rem",
                          backgroundColor: "#66D6F5",
                          width: "10em"
                        }}
                      >
                        <i
                          className="fas fa-users fa-5x"
                          style={{ color: "white", marginTop: "2rem" }}
                        ></i>
                        <Card.Body>
                          <Card.Title style={{ color: "white" }}>TEAM 1</Card.Title>
                          <Button variant="light">ACCESS</Button>
                        </Card.Body>
                      </Card>
                    </center>
                    
                    <center>
                      <Card
                        style={{
                          marginTop: "1rem",
                          marginBottom: "1rem",
                          backgroundColor: "#66D6F5",
                          width: "10em"
                        }}
                      >
                        <i
                          className="fas fa-users fa-5x"
                          style={{ color: "white", marginTop: "2rem" }}
                        ></i>
                        <Card.Body>
                          <Card.Title style={{ color: "white" }}>TEAM 1</Card.Title>
                          <Button variant="light">ACCESS</Button>
                        </Card.Body>
                      </Card>
                    </center>

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
                          <Card.Title style={{ color: "white" }}>TEAM 1</Card.Title>
                          <Button variant="light">ACCESS</Button>
                        </Card.Body>
                      </Card>
                    </center>

                    <center>
                      <Card
                        style={{
                          marginTop: "1rem",
                          marginBottom: "1rem",
                          backgroundColor: "#66D6F5",
                          width: "10em"
                        }}
                      >
                        <i
                          className="fas fa-users fa-5x"
                          style={{ color: "white", marginTop: "2rem" }}
                        ></i>
                        <Card.Body>
                          <Card.Title style={{ color: "white" }}>TEAM 1</Card.Title>
                          <Button variant="light">ACCESS</Button>
                        </Card.Body>
                      </Card>
                    </center>
                    
                    <center>
                      <Card
                        style={{
                          marginTop: "1rem",
                          marginBottom: "1rem",
                          backgroundColor: "#66D6F5",
                          width: "10em"
                        }}
                      >
                        <i
                          className="fas fa-users fa-5x"
                          style={{ color: "white", marginTop: "2rem" }}
                        ></i>
                        <Card.Body>
                          <Card.Title style={{ color: "white" }}>TEAM 1</Card.Title>
                          <Button variant="light">ACCESS</Button>
                        </Card.Body>
                      </Card>
                    </center>

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
                          <Card.Title style={{ color: "white" }}>TEAM 1</Card.Title>
                          <Button variant="light">ACCESS</Button>
                        </Card.Body>
                      </Card>
                    </center>

                    <center>
                      <Card
                        style={{
                          marginTop: "1rem",
                          marginBottom: "1rem",
                          backgroundColor: "#66D6F5",
                          width: "10em"
                        }}
                      >
                        <i
                          className="fas fa-users fa-5x"
                          style={{ color: "white", marginTop: "2rem" }}
                        ></i>
                        <Card.Body>
                          <Card.Title style={{ color: "white" }}>TEAM 1</Card.Title>
                          <Button variant="light">ACCESS</Button>
                        </Card.Body>
                      </Card>
                    </center>
                    
                    <center>
                      <Card
                        style={{
                          marginTop: "1rem",
                          marginBottom: "1rem",
                          backgroundColor: "#66D6F5",
                          width: "10em"
                        }}
                      >
                        <i
                          className="fas fa-users fa-5x"
                          style={{ color: "white", marginTop: "2rem" }}
                        ></i>
                        <Card.Body>
                          <Card.Title style={{ color: "white" }}>TEAM 1</Card.Title>
                          <Button variant="light">ACCESS</Button>
                        </Card.Body>
                      </Card>
                    </center>
                  </CardDeck>
                </Card>
  </Card>
</Container>
    


    );
    }
}

export default Settings;

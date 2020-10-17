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


class ProfileComponent extends Component {
  emailIcon = (<i className="fab fa-user"></i>);

  render() {
    return (
<Container>

<Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

      <Row className="justify-content-center">
          <Card style={{ borderRadius: "15px", marginTop: "10rem", width:'100rem'}}>
            <Card.Body>
              <Card.Text>
                <Row >
                  <Col>
                  
                    <Image src={mainLogo} width="300" height="300" roundedCircle />
                    <p></p>
                    <Button variant="dark">Upload Picture</Button>
                    
                  </Col>
                  <Col  className="justify-content-center">
                    <h1>
                      Job/Bachelor Title
                    </h1>
                    <h2>
                      Company/university
                    </h2>
                    <h4>
                      Department:
                    </h4>
                    <h4>
                      Location:
                    </h4>
                    <h4>
                      Bio:
                    </h4>
                  </Col>
                </Row>
                <br></br>
                
                <Card style={{ borderRadius: "15px", marginTop: "1rem"}}>
                  <CardDeck>
                  <Card
                    bg={'primary'}
                    key={1}
                    style={{ width: '18rem' }}
                    className="mb-2"
                  >
                    <Card.Body>
                      <Card.Text>
                        <h1>Team 1</h1>
                        <h4>Spanish course team</h4>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    bg={'success'}
                    key={1}
                    style={{ width: '18rem' }}
                    className="mb-2"
                  >
                    <Card.Body>
                      <Card.Text>
                        <h1>Team 2</h1>
                        <h4>English course team</h4>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    bg={'warning'}
                    key={1}
                    style={{ width: '18rem' }}
                    className="mb-2"
                  >
                    <Card.Body>
                      <Card.Text>
                        <h1>Team 3</h1>
                        <h4>INSO course team</h4>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </CardDeck>
                  </Card>
                
              </Card.Text>
            </Card.Body>
          </Card>
      </Row>
    </Container>


    );
    }
}

export default ProfileComponent;

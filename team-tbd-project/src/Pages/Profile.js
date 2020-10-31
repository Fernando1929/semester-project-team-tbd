import React from "react";
import "../App/App.css";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import mainLogo from "../Images/HomeBackground.jpg";
import Image from "react-bootstrap/Image";
import UpdateProfileForm from "../Components/UpdateProfileForm";

//User info here please!
const PersonInfo = {
  name: "Orlando F. Marrero Soto",
  email: "orlando.marrero6@upr.edu",
  phone: "787-413-1722",
  location: "Las Piedras, PR",
  bio: "Quiero partir INSO",
};

const sectionText = {
  color: "#5b86e5",
  marginLeft: "1rem",
  marginTop: "0.2rem",
};

const textStyle = {
  marginLeft: "1rem",
};

function Profile() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container>
      <Card style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <Card.Header>
          <Nav fill variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">General Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="./Teams">Teams</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Row className="justify-content-center">
          <Card.Body>
            <Row>
              <Col>
                <center>
                  <Image
                    src={mainLogo}
                    width="300"
                    height="300"
                    roundedCircle
                  />
                </center>
              </Col>
              <Col
                className="justify-content-center"
                style={{ marginTop: "4rem" }}
              >
                <h1>{PersonInfo.name}</h1>

                <Row className="justify-content-right">
                  <h5 style={sectionText}>Email:</h5>
                  <h4 style={textStyle}>{PersonInfo.email}</h4>
                </Row>

                <Row className="justify-content-right">
                  <h5 style={sectionText}>Phone Number:</h5>
                  <h4 style={textStyle}>{PersonInfo.phone}</h4>
                </Row>

                <Row className="justify-content-right">
                  <h5 style={sectionText}>Location:</h5>
                  <h4 style={textStyle}>{PersonInfo.location}</h4>
                </Row>

                <Row className="justify-content-right">
                  <h5 style={sectionText}>Bio:</h5>
                  <h4 style={textStyle}>{PersonInfo.bio}</h4>
                </Row>
              </Col>
            </Row>
            <br></br>
          </Card.Body>
        </Row>

        <Row className="justify-content-center">
          <Button className="btn--primary" onClick={() => setModalShow(true)}>
            Update Profile
          </Button>

          <UpdateProfileForm
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Row>
      </Card>
    </Container>
  );
}

export default Profile;

//Popup form

/* <Col>
              
                      <Button
                        variant="light"
                        onClick={() => setModalShow(true)}
                      >
                        +
                      </Button>

                      <CreateTeamForm
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                   
            </Col> */

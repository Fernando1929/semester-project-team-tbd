import React from "react";
import "../../App/App.css";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import mainLogo from "../../Images/HomeBackground.jpg";
import Image from "react-bootstrap/Image";
import UpdateProfileForm from "../../Components/UpdateProfileForm";
import { profileGetHandler } from "../../Apis/UserProfile";
import { withRouter} from "react-router-dom";
const sectionText = {
  color: "#5b86e5",
  marginLeft: "1rem",
  marginTop: "0.2rem",
};

const textStyle = {
  marginLeft: "1rem",
};

function Profile(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    profileGetHandler().then(res => {
      setUser(res.data.user);
    })
  }, []);

  return (
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
                <h1>{user.user_firstname + " " + user.user_lastname}</h1>

                <Row className="justify-content-right">
                  <h5 style={sectionText}>Email:</h5>
                  <h4 style={textStyle}>{user.email}</h4>
                </Row>

                <Row className="justify-content-right">
                  <h5 style={sectionText}>Phone Number:</h5>
                  <h4 style={textStyle}>{user.user_phone}</h4>
                </Row>

                <Row className="justify-content-right">
                  <h5 style={sectionText}>Location:</h5>
                  <h4 style={textStyle}>{user.user_location}</h4>
                </Row>

                <Row className="justify-content-right">
                  <h5 style={sectionText}>Bio:</h5>
                  <h4 style={textStyle}>{user.user_bio}</h4>
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

export default withRouter(Profile);

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

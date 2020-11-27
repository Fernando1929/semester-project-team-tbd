import React from "react";
import "../../App/App.css";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
// import mainLogo from "../../Images/HomeBackground.jpg";
import placeholder from "../../Images/placeholder.png";
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

const reformat_time = (time) => {
  const orig_hours = parseInt(time.split(":")[0]);
  const conv_hours = (orig_hours % 12) || 12;
  var res = conv_hours + ":" + time.split(":")[1];
  res = (orig_hours < 12) ? res + " AM" : res + " PM" ;

  return res;
}

function Profile() {
  const [modalShow, setModalShow] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [profile_picture, setProfilePicture] = React.useState("");

  React.useEffect(() => {
    profileGetHandler().then(res => {
      const user = res.data.user;
      // console.log(res.data.data.user);
      
      if(user !== undefined) {
        setUser(user);
      if (user.profile_picture) {
        setProfilePicture("http://localhost:3001/" + user.profile_picture);
      }
      else {
        setProfilePicture(placeholder);
      }
    }else{
      setProfilePicture(placeholder);
    }
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
                    src={profile_picture}
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
                  <h5 style={sectionText}>Working Hours:</h5>
                  <h4 style={textStyle}>
                    {(user.pref_start_work_hour && user.pref_end_work_hour) ? 
                      reformat_time(user.pref_start_work_hour) + " - " + reformat_time(user.pref_end_work_hour) : ""}
                  </h4>
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

import React from "react";
import { Navbar, Nav, Button, Image, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import mainLogo from "../Images/synLogoNM.png";
import profilePic from "../Images/HomeBackground.jpg";
import placeholder from "../Images/placeholder.png";
import "../App/App.css";
import CreateTeamForm from "../Components/CreateTeamForm";
import Auth from "../utils/Auth";
import { profileGetHandler } from "../Apis/UserProfile";

function LoginNavbar() {
  const [modalShow, setModalShow] = React.useState(false);
  const [profile_picture, setProfilePicture] = React.useState("");

  React.useEffect(() => {
    profileGetHandler().then(res => {
      const user = res.data.user;
      if(user !== undefined) {
        if (user.profile_picture) {
          setProfilePicture("http://localhost:3001/" + user.profile_picture);
        }
        else {
          setProfilePicture(placeholder);
        }
      }
      else {
        setProfilePicture(placeholder);
      }


    })
  }, []);

  const navStyle = {
    textDecoration: "none",
    alignItems: "center",
    marginTop: "10px",
  };

  //Poner los tres teams más recientes del usuario.
  var mostRecent = [
    { name: "Team1", link: "/Team1" },
    { name: "Team2", link: "/Team2" },
    { name: "Team3", link: "/Team3" },
  ];

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">
        <h2
          className="phoneDisplayNoText"
          style={{
            fontFamily: "'Roboto Mono', monospace",
            alignItems: "center",
            marginBottom: "0",
          }}
        >
          <img
            alt=""
            src={mainLogo}
            width="108"
            height="62"
            className="d-inline-block"
            style={{ marginRight: "10px" }}
          />
          {""}
          SYNCLINK
        </h2>
        <h2
          className="phoneDisplayLogo"
          style={{
            fontFamily: "'Roboto Mono', monospace",
            alignItems: "center",
            marginBottom: "0",
          }}
        >
          <img
            alt=""
            src={mainLogo}
            width="108"
            height="62"
            className="d-inline-block"
            style={{ marginRight: "10px" }}
          />
          {""}
        </h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        style={{ textAlign: "center" }}
      >
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/" style={navStyle}>
            HOME
          </Nav.Link>
          <Nav.Link href="/UserSchedule" style={navStyle}>
            MY SCHEDULE
          </Nav.Link>
          <Dropdown style={navStyle}>
            <Dropdown.Toggle
              className="btn--primary"
              variant="primary"
              id="MY TEAMS"
            >
              MY TEAMS
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: "#36d1dc" }}>
              {mostRecent.map((team) => {
                return (
                  <Dropdown.Item key={team.name} href={team.link}>
                    {team.name}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>

          <Button
            className="btn--primary"
            variant="primary"
            style={{
              marginRight: "0.5rem",
              color: "white",
              textAlign: "center",
              marginTop: "10px",
              marginBottom: "15px",
            }}
            onClick={() => setModalShow(true)}
          >
            CREATE NEW TEAM
          </Button>
          <CreateTeamForm show={modalShow} onHide={() => setModalShow(false)} />
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              alignItems: "center",
            }}
            onClick={() => window.location.assign("/")}
          >
            <Button
              className="btn--primary"
              variant="primary"
              style={{
                marginRight: "0.5rem",
                color: "white",
                textAlign: "center",
                marginTop: "10px",
                marginBottom: "15px",
              }}
              onClick={() => Auth.deauthenticateUser()}
            >
              LOG OUT
            </Button>
          </Link>
          <Link
            to="/Profile"
            style={{
              textDecoration: "none",
              color: "white",
              alignItems: "center",
            }}
          >
            <Image
              className="d-inline-block"
              src={profile_picture}
              width="60"
              height="60"
              roundedCircle
            />
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default LoginNavbar;

import React from "react";
import { Navbar, Nav, Button, Image, Dropdown } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import mainLogo from "../Images/synLogoNM.png";
import placeholder from "../Images/placeholder.png";
import "../App/App.css";
import CreateTeamForm from "../Components/CreateTeamForm";
import Auth from "../utils/Auth";
import { profileGetHandler } from "../Apis/UserProfile";
import { getUserTeamsHandler } from "../Apis/Teams"

function LoginNavbar(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [profile_picture, setProfilePicture] = React.useState("");
  const [userTeams, setUserTeams] = React.useState([]);

  var today = new Date().toDateString().split(" ");
  today = today[2] + "-" + today[1] + "-" + today[3];

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
      <Navbar.Brand onClick={() => {props.history.push("/")}}>
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
          <Nav.Link style={navStyle}onClick={() => {props.history.push("/")}}>
            HOME
          </Nav.Link>
          <Nav.Link style={navStyle} onClick={() => {props.history.push(`/UserSchedule/${today}`)}}>
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
              {userTeams.map((team) => {
                return (
                  <Dropdown.Item key={team.team_id} to={`/TeamProfile/${team.team_id}`}>
                    {team.team_name}
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

export default withRouter(LoginNavbar);

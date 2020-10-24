import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import mainLogo from "../Images/synLogoNM.png";
import profilePic from "../Images/HomeBackground.jpg";
import "../App.css";
import Image from 'react-bootstrap/Image';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function LoginNavbar() {

const navStyle = {
  textDecoration: "none",
  alignItems: "center",
  marginTop: "10px",
};

return(

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
    <Nav.Link style={navStyle}>
      <Link to="/">
        HOME
      </Link>
    </Nav.Link>
    <Nav.Link style={navStyle}>
      <Link to="/Services">
        MY SCHEDULE
      </Link>
    </Nav.Link>
    <Nav.Link style={navStyle}>
      <Link to="/AboutUs">
        MY TEAMS
      </Link>
    </Nav.Link>
    <Link to="/LogIn" style={{ textDecoration: "none", color: "white", alignItems: "center", marginTop: "10px" }}>
      <Button className="btn--primary" variant="primary">
       CREATE NEW TEAM
      </Button>
    </Link>
    <Link to="/Profile" style={{ textDecoration: "none", color: "white" , alignItems: "center"}}>
       <Image className="d-inline-block" src={profilePic} width="60" height="60"  roundedCircle />
    </Link>
  </Nav>
</Navbar.Collapse>
</Navbar>

)
}

export default LoginNavbar;

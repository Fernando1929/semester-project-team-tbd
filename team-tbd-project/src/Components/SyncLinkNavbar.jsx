import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import mainLogo from "../Images/synLogoNM.png";
import "../App.css";

function SyncLinkNavbar() {
  const navStyle = {
    textDecoration: "none",
  };

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
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
          <Nav.Link href="/Services" style={navStyle}>
            SERVICES
          </Nav.Link>
          <Nav.Link href="/AboutUs" style={navStyle}>
            ABOUT US
          </Nav.Link>
          <Nav.Link href="/ContactUs" style={navStyle}>
            CONTACT US
          </Nav.Link>
          <Button href="/LogIn" className="btn--primary" variant="primary">
            LOG IN
          </Button>
          <Button href="/SignUp" className="btn--primary" variant="primary">
            SIGN UP
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SyncLinkNavbar;

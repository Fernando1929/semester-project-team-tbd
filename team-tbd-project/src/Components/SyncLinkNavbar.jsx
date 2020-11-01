import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import mainLogo from "../Images/synLogoNM.png";
import "../App/App.css";
import Auth from "../utils/Auth";
import { Link } from "react-router-dom";

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
          {Auth.isUserAuthenticated() ?
          <Link to="/" style={{ textDecoration: "none", color: "white" }} onClick={() => window.location.assign("/")}>
            <Button className="btn--primary" variant="primary" onClick={() => Auth.deauthenticateUser()}>
              LOG OUT
            </Button>
          </Link>
          :<>
          <Link to="/LogIn" style={{ textDecoration: "none", color: "white" }}>
            <Button className="btn--primary" variant="primary">
              LOG IN
            </Button>
          </Link>
          <Link to="/SignUp" style={{ textDecoration: "none", color: "white" }}>
            <Button className="btn--primary" variant="primary">
              SIGN UP
            </Button>
          </Link>
          </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SyncLinkNavbar;

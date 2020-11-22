import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import mainLogo from "../Images/synLogoNM.png";
import "../App/App.css";
import { Link, withRouter } from "react-router-dom";

function SyncLinkNavbar(props) {
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
          <Nav.Link onClick={() => {props.history.push("/")}} style={navStyle}>
            HOME
          </Nav.Link>
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(SyncLinkNavbar);

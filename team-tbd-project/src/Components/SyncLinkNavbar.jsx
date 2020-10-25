import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import mainLogo from "../Images/synLogoNM.png";
import "../App.css";

function SyncLinkNavbar() {
  const navStyle = {
    textDecoration: "none",
  };
  //document.location.reload(); gatta find a home for this 
  // if (window.location.pathname==="/"){
  //   return (

  //     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  //     <Navbar.Brand href="/">
  //       <h2
  //         className="phoneDisplayNoText"
  //         style={{
  //           fontFamily: "'Roboto Mono', monospace",
  //           alignItems: "center",
  //           marginBottom: "0",
  //         }}
  //       >
  //         <img
  //           alt=""
  //           src={mainLogo}
  //           width="108"
  //           height="62"
  //           className="d-inline-block"
  //           style={{ marginRight: "10px" }}
  //         />
  //         {""}
  //         SYNCLINK
  //       </h2>
  //       <h2
  //         className="phoneDisplayLogo"
  //         style={{
  //           fontFamily: "'Roboto Mono', monospace",
  //           alignItems: "center",
  //           marginBottom: "0",
  //         }}
  //       >
  //         <img
  //           alt=""
  //           src={mainLogo}
  //           width="108"
  //           height="62"
  //           className="d-inline-block"
  //           style={{ marginRight: "10px" }}
  //         />
  //         {""}
  //       </h2>
  //     </Navbar.Brand>
  //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //     <Navbar.Collapse
  //       id="responsive-navbar-nav"
  //       style={{ textAlign: "center" }}
  //     >
  //       <Nav className="mr-auto"></Nav>
  //       <Nav>
  //         <Nav.Link>
  //           <Link to="/" style={navStyle}>
  //             HOME
  //           </Link>
  //         </Nav.Link>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Navbar>
  // );
  // }

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
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
          <Nav.Link>
            <Link to="/" style={navStyle}>
              HOME
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Services" style={navStyle}>
              SERVICES
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/AboutUs" style={navStyle}>
              ABOUT US
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/ContactUs" style={navStyle}>
              CONTACT US
            </Link>
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

export default SyncLinkNavbar;

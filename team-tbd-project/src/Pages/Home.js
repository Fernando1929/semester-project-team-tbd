import React from "react";
import "../../src/App.css";
import "./Home.css";
import backgroundH from "../Images/newHomeBk.gif";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Container
        fluid
        className="d-flex align-items-start "
        style={{
          backgroundImage: "url(" + backgroundH + ")",

          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <Row>
          <Col
            style={{
              textAlign: "center",
              marginTop: "35%",
              marginLeft: "18%",
            }}
            sm
          >
            <h1 style={{ fontSize: "7vw" }}>SYNCLINK</h1>
            <h3 style={{ fontSize: "2vw" }}>MEET AT THE PERFECT MOMENT</h3>
            <div>
              <Link
                to="/SignUp"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <Button
                  className="btn--primary"
                  variant="primary"
                  style={{ fontSize: "2vw", marginBottom: "1rem" }}
                >
                  GET STARTED
                </Button>
              </Link>
            </div>
            <div>
              <Link
                to="/LogIn"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "2vw",
                }}
              >
                <Button className="btn--secondary" style={{ fontSize: "2vw" }}>
                  LOG IN
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import "../App.css";

function SignUpForm() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={7}>
          <Card style={{ borderRadius: "15px", marginTop: "3rem" }}>
            <Card.Body>
              <Card.Title>
                <h1
                  className="text-center"
                  style={{
                    fontWeight: "600",
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  Sign Up
                </h1>
              </Card.Title>
              <Card.Text>
                <InputGroup style={{ marginBottom: "1rem" }}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <i class="far fa-user"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl id="Username" placeholder="Username" />
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <i class="far fa-envelope"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="email" id="Email" placeholder="Email" />
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <i class="fas fa-lock"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="password"
                    id="Password"
                    placeholder="Password"
                  />
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <i class="fas fa-lock"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="password"
                    id="Re-enterPassword"
                    placeholder="Re-enter Password"
                  />
                </InputGroup>
              </Card.Text>
              <div className="text-center">
                <Link to="/ProfileInfo">
                  <Button className="btn--primary" variant="primary">
                  CREATE ACCOUNT
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpForm;

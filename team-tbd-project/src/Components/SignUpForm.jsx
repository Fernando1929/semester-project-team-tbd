import React, { Component, useState } from "react";
import SignUp from "../Apis/SignUp";
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

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_rep, setPassword_rep] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(password == password_rep){
        const response = await SignUp.post("/signup", {
          username: username,
          email: email,
          password: password
        });
        console.log(response);
      }

    } catch (err) {
      console.log(err);
    }
  }

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
                  <FormControl id="Username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <i class="far fa-envelope"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="email" id="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
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
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
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
                    value={password_rep} 
                    onChange={(e) => setPassword_rep(e.target.value)}
                  />
                </InputGroup>
              </Card.Text>
              <div className="text-center">
                <Button onClick={(e) => handleSubmit(e)} type="submit" className="btn--primary" variant="primary">
                  CREATE ACCOUNT
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpForm;

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

class SignUpForm extends Component {
  emailIcon = (<i className="fab fa-user"></i>);
  state = {
    username: "",
    email: "",
    password: "",
    password_rep: ""
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(this.state.password == this.state.password_rep){
        const response = await SignUp.post("/signup", {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        });
        console.log(response);
      }

    } catch (err) {}
  }

  render() {
    // const {state} = this;
    // const setState = state => this.setState(state);

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
                    <FormControl 
                      id="Username" 
                      placeholder="Username" 
                      value={this.state.username} 
                      onChange={e => this.setState({username: e.target.value, email: this.state.email, password: this.state.password, password_rep: this.state.password_rep})} 
                    />
                  </InputGroup>
                  <InputGroup style={{ marginBottom: "1rem" }}>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <i class="far fa-envelope"></i>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                      type="email" 
                      id="Email" 
                      placeholder="Email" 
                      value={this.state.email} 
                      onChange={e => this.setState({username: this.state.username, email: e.target.value, password: this.state.password, password_rep: this.state.password_rep})} 
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
                      id="Password"
                      placeholder="Password"
                      value={this.state.password} 
                      onChange={e => this.setState({username: this.state.username, email: this.state.email, password: e.target.value, password_rep: this.state.password_rep})}
                    />
                  </InputGroup>
                  <InputGroup style={{ marginBottom: "1rem" }}>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <i class="fas fa-lock"></i>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      type="passwordReType"
                      id="Re-enterPassword"
                      placeholder="Re-enter Password"
                      value={this.state.password_rep} 
                      onChange={e => this.setState({username: this.state.username, email: this.state.email, password: this.state.password, password_rep: e.target.value})}
                    />
                  </InputGroup>
                </Card.Text>
                <div className="text-center">
                  <Button onClick={e => this.handleSubmit(e)} type="submit" className="btn--primary" variant="primary">
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
}

export default SignUpForm;

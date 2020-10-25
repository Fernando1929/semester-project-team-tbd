import React, { useState } from "react";
import {signupHandler} from "../Apis/SignUp";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import "../App/App.css";

function SignUpForm() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_rep, setPassword_rep] = useState("");
  const [error_message, setErrors] =  useState([]);

const submit = (e) => {
  e.preventDefault();
  if(validateForm()){
    console.log("validated")
    let errors = []
    const user = {
      username: username,
      email: email,
      password: password,
    };
    //Here send things to the handler
    signupHandler(user).then(res => {
      if(res.status === 201){
        //change to the other form to fill the profile info
        console.log(res);
      }else{
        errors.push(res.data);
        setErrors(errors);
      }
    });
  }
};

const validateForm = () =>{
  let errors = [];
  let isValid = true;
  if(!(username.length > 0)){
    isValid = false;
    errors.push("*Please enter your username.");
  }
  if(!(email.length > 0)){
    isValid = false;
    errors.push("*Please enter your email.");
  }
  if((!(email.indexOf("@") > 0) || !(email.charAt(email.length-4)) === '.') && email.length > 0){
    isValid = false;
    errors.push("*Please enter a proper email address.");
  }
  if(!(password.length > 0)){
    isValid = false;
    errors.push("*Please enter your password ");
  }
  if(!(password === password_rep) && (password.length > 0)){
    isValid = false;
    errors.push("*Passwords doesn't match.");
  }
  setErrors(errors);
  return isValid;
}
////////////////////////////////////////////////
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
                      <i className="far fa-user"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl id="Username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <i className="far fa-envelope"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl type="email" id="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <i className="fas fa-lock"></i>
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
                      <i className="fas fa-lock"></i>
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
                <div className="error_message">{
                error_message.map(error =>(<h5 key={error_message.indexOf(error)}>{error}</h5>))}
                </div>
              <div className="text-center">
                <Button onClick={(e) => submit(e)} type="submit" className="btn--primary" variant="primary">
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

// By Yeran L Concepcion
// 10/1/2020

import React, { useState } from "react";
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
import { loginHandler } from "../Apis/Login";
import Auth from "../Pages/Auth";

function LogInForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error_message, setErrors] = useState([]);

  const submit = e => {
    e.preventDefault();
    if(validateForm()){//validate the form and fix it 
      const user = {
        username: username,
        email: email,
        password: password
      }
      loginHandler(user).then( res =>{
        if(res.status === 200){
          Auth.authenticateUser(res.data);
          console.log(res.data);
        }else{//here you manage the error messages
          let errors  = [];
            errors.push(res.data);
          setErrors(errors);
        }
      });
    }
  };

  const validateForm = () => {
    let errors = [];
    let isValid =  true;
    if(username.indexOf("@") > 0 && username.charAt(username.length-4) === '.'){
      setEmail(username);
      setUsername(""); 
    }
    if(!(username.length > 0)){
      isValid = false;
      errors.push("*Please enter your username.");
    }
    if(!(password.length > 0)){
      isValid = false;
      errors.push("*Please enter your password.");
    }
    setErrors(errors);
    return isValid;
  };

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
                      fontWeight: "500",
                      fontFamily: "'Open Sans', sans-serif",
                    }}
                  >
                    Welcome Back!
                  </h1>
                </Card.Title>
                <Card.Text>
                  <InputGroup
                  style={{ marginBottom: "1rem" }}>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <i className="far fa-user"></i>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      id="Username"
                      placeholder="Username or email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
                      id="Password"
                      placeholder="Password"
                      value ={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </InputGroup>
                </Card.Text>
                <div className="error_message">
                  {error_message.map(error => (
                    <h5 key={error_message.indexOf(error)}>{error}</h5>))
                    }
                </div>
                <div className="text-center">
                  <Button className="btn--primary" variant="primary" onClick={submit}>
                    LOG IN
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default LogInForm;

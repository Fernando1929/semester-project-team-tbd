import React, { useState } from "react";
import {userInfoHandler} from "../Apis/UserInfo";
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
import Auth from '../utils/Auth';

function UserForm() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [street_address, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error_message, setErrors] =  useState([]);

  const account_id = parseInt(Auth.getUserid());

  const submit = (e) => {
    e.preventDefault();
    if(validateForm()){
      console.log("validated")
      const user = {
        user_firstname: firstname,
        user_lastname: lastname,
        user_phone: phone,
        user_location: street_address + ", " + city + ", " + country,
        pref_start_work_hour: null,
        pref_end_end_hour: null,
        account_id: account_id
      };
  
      //Here send things to the handler
      userInfoHandler(user).then(res => {
        console.log(res);
        window.location.assign("/LoginValidate");
      });
    }
  };

  const validateForm = () =>{
    let errors = [];
    let isValid = true;
    if(!(firstname.length > 0)){
      isValid = false;
      errors.push("*Please enter your first name.");
    }
    if(!(lastname.length > 0)){
      isValid = false;
      errors.push("*Please enter your last name.");
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
                  Profile Info
                </h1>
              </Card.Title>
              <Card.Text>
                <InputGroup style={{ marginBottom: "1rem" }}>
                  <FormControl type="firstName" placeholder="*First name" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                  <FormControl type="lastName" placeholder="*Last name" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                  <FormControl type="phone" id="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                  <FormControl type="street_address" id="street_address" placeholder="Street Address" value={street_address} onChange={(e) => setStreetAddress(e.target.value)}/>
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                  <FormControl type="city" id="city" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/>
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                  <FormControl type="country" id="country" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)}/>
                </InputGroup>
              </Card.Text>
              <p className="notice">Fields with "*" are required.</p>
              <div className="error_message">{
                error_message.map(error =>(<h5>{error}</h5>))}
              </div>
              <div className="text-center">
                  <Button type="submit" onClick={(e) => submit(e)} className="btn--primary" variant="primary">Continue </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserForm;

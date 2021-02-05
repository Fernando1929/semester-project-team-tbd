import React, { useState } from "react";
import { userInfoHandler } from "../Apis/UserInfo";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import "../App/App.css";
import Auth from "../utils/Auth";
import {withRouter} from "react-router-dom";

function UserForm(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [startWorkingHour, setStartWorkingHour] = useState("");
  const [endWorkingHour, setEndWorkingHour] = useState("");
  const [street_address, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error_message, setErrors] = useState([]);

  const account_id = parseInt(Auth.getUserid());

  const build_location = (street_address, city, country) => {
    const address_length = street_address.trim().length;
    const city_length = city.trim().length;
    const country_length = country.trim().length;

    if (address_length && city_length && country_length) {
      return street_address + ", " + city + ", " + country;
    }
    else if (city_length && country_length) {
      return city + ", " + country;
    }
    else if (address_length && city_length) {
      return street_address + ", " + city;
    }
    else if (address_length && country_length) {
      return street_address + ", " + country;
    }
    else if (address_length) {
      return street_address;
    }
    else if (city_length) {
      return city;
    }
    else if (country_length) {
      return country;
    }

    return "";
  }

  const submit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("validated");
      const user = {
        user_firstname: firstname,
        user_lastname: lastname,
        user_phone: phone,
        user_location: build_location(street_address, city, country),
        pref_start_work_hour: startWorkingHour,
        pref_end_work_hour: endWorkingHour,
        account_id: account_id,
      };

      userInfoHandler(user).then((res) => {
        //Here send things to the handler
        if (res.status === 201) {
          props.history.push("/LoginValidate"); //test to make sure the redirect happens
        }
      });
    }
  };

  const validateForm = () => {
    let errors = [];
    let isValid = true;
    if (!(firstname.length > 0)) {
      isValid = false;
      errors.push("*Please enter your first name.");
    }
    if (!(lastname.length > 0)) {
      isValid = false;
      errors.push("*Please enter your last name.");
    }
    setErrors(errors);
    return isValid;
  };
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

              <InputGroup style={{ marginBottom: "1rem" }}>
                <FormControl
                  type="firstName"
                  placeholder="*First name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <FormControl
                  type="lastName"
                  placeholder="*Last name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </InputGroup>
              <InputGroup style={{ marginBottom: "1rem" }}>
                <FormControl
                  type="phone"
                  id="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label className="text-muted" style={{ fontSize: "smaller" }}>
                  Besides the leading ‘+’ in the country code, all characters
                  should be numeric. Ex. +17871234567.
                </label>
              </InputGroup>
              <label>Working Hours</label>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control
                    as="select"
                    defaultValue="From"
                    onChange={(e) => setStartWorkingHour(e.target.value)}
                  >
                    <option>*From</option>
                    <option value="00:00">12:00 AM</option>
                    <option value="00:30">12:30 AM</option>
                    <option value="01:00">01:00 AM</option>
                    <option value="01:30">01:30 AM</option>
                    <option value="02:00">02:00 AM</option>
                    <option value="02:30">02:30 AM</option>
                    <option value="03:00">03:00 AM</option>
                    <option value="03:30">03:30 AM</option>
                    <option value="04:00">04:00 AM</option>
                    <option value="04:30">04:30 AM</option>
                    <option value="05:00">05:00 AM</option>
                    <option value="05:30">05:30 AM</option>
                    <option value="06:00">06:00 AM</option>
                    <option value="06:30">06:30 AM</option>
                    <option value="07:00">07:00 AM</option>
                    <option value="07:30">07:30 AM</option>
                    <option value="08:00">08:00 AM</option>
                    <option value="08:30">08:30 AM</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="09:30">09:30 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="13:30">01:30 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="14:30">02:30 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="15:30">03:30 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="16:30">04:30 PM</option>
                    <option value="17:00">05:00 PM</option>
                    <option value="17:30">05:30 PM</option>
                    <option value="18:00">06:00 PM</option>
                    <option value="18:30">06:30 PM</option>
                    <option value="19:00">07:00 PM</option>
                    <option value="19:30">07:30 PM</option>
                    <option value="20:00">08:00 PM</option>
                    <option value="20:30">08:30 PM</option>
                    <option value="21:00">09:00 PM</option>
                    <option value="21:30">09:30 PM</option>
                    <option value="22:00">10:00 PM</option>
                    <option value="22:30">10:30 PM</option>
                    <option value="23:00">11:00 PM</option>
                    <option value="23:30">11:30 PM</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control
                    as="select"
                    defaultValue="To"
                    onChange={(e) => setEndWorkingHour(e.target.value)}
                  >
                    <option>*To</option>
                    <option value="00:00">12:00 AM</option>
                    <option value="00:30">12:30 AM</option>
                    <option value="01:00">01:00 AM</option>
                    <option value="01:30">01:30 AM</option>
                    <option value="02:00">02:00 AM</option>
                    <option value="02:30">02:30 AM</option>
                    <option value="03:00">03:00 AM</option>
                    <option value="03:30">03:30 AM</option>
                    <option value="04:00">04:00 AM</option>
                    <option value="04:30">04:30 AM</option>
                    <option value="05:00">05:00 AM</option>
                    <option value="05:30">05:30 AM</option>
                    <option value="06:00">06:00 AM</option>
                    <option value="06:30">06:30 AM</option>
                    <option value="07:00">07:00 AM</option>
                    <option value="07:30">07:30 AM</option>
                    <option value="08:00">08:00 AM</option>
                    <option value="08:30">08:30 AM</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="09:30">09:30 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="13:30">01:30 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="14:30">02:30 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="15:30">03:30 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="16:30">04:30 PM</option>
                    <option value="17:00">05:00 PM</option>
                    <option value="17:30">05:30 PM</option>
                    <option value="18:00">06:00 PM</option>
                    <option value="18:30">06:30 PM</option>
                    <option value="19:00">07:00 PM</option>
                    <option value="19:30">07:30 PM</option>
                    <option value="20:00">08:00 PM</option>
                    <option value="20:30">08:30 PM</option>
                    <option value="21:00">09:00 PM</option>
                    <option value="21:30">09:30 PM</option>
                    <option value="22:00">10:00 PM</option>
                    <option value="22:30">10:30 PM</option>
                    <option value="23:00">11:00 PM</option>
                    <option value="23:30">11:30 PM</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <InputGroup style={{ marginBottom: "1rem" }}>
                <FormControl
                  type="street_address"
                  id="street_address"
                  placeholder="Street Address"
                  value={street_address}
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
              </InputGroup>
              <InputGroup style={{ marginBottom: "1rem" }}>
                <FormControl
                  type="city"
                  id="city"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </InputGroup>
              <InputGroup style={{ marginBottom: "1rem" }}>
                <FormControl
                  type="country"
                  id="country"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </InputGroup>

              <p className="notice">Fields with "*" are required.</p>
              <div className="error_message">
                {error_message.map((error) => (
                  <h5>{error}</h5>
                ))}
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  onClick={(e) => submit(e)}
                  className="btn--primary"
                  variant="primary"
                >
                  Continue{" "}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(UserForm);

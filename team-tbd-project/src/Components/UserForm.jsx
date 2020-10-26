import React from "react";
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

function UserForm() {
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
                  <FormControl type="firstName" placeholder="*First name" />
                  <FormControl type="lastName" placeholder="*Last name" />
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                  <FormControl type="phone" id="phone" placeholder="*Phone" />
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                  <FormControl type="street_address" id="street_address" placeholder="Street Address"/>
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                  <FormControl type="city" id="city" placeholder="City"/>
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                  <FormControl type="country" id="country" placeholder="Country"/>
                </InputGroup>
              </Card.Text>
              <p className="notice">Fields with "*" are required.</p>
              <div className="text-center">
                <Button className="btn--primary" variant="primary">Continue </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserForm;

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";
import { validateResend } from "../Apis/Validate";
import "../App/App.css";


function Validate() {

  const resend = e => {
    e.preventDefault();
      validateResend().then( res =>{
        console.log(res);
        // if(res.status === 200){
        //   //lol
        // }else{
        //   console.log(res)
        // }
      });
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
                    Validate Your Email!
                  </h1>
                </Card.Title>
                <Card.Text>
                <h5>Validate using the link to login from the email you receive from us.</h5>
                </Card.Text>
                <div className="text-center">
                    <Button className="btn--primary" variant="primary" onClick={(e) => resend(e)}>
                      Resend email
                    </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default Validate;

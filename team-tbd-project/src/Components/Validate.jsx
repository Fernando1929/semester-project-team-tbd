import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { validateResend, verifyValidation } from "../Apis/Validate";

import "../App/App.css";
import "../Pages/SignUp/SignUp.css";

function Validate() {
  const [msg, setmsg] = useState([]);
  const [card_header, setCardHeader] = useState("Validate Your Email!");
  const [card_text, setCardText] = useState("Validate using the link to login from the email you receive from us.");
  const [resendFlag, setResendFlag] = useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      verifyValidation().then((res) => {
        const account = res.data.account;
        if (account.account_validation) {
          setCardHeader("Email Validated!");
          setCardText("Your account has been successfully validated!\nYou may now close this window.");
          setResendFlag(true);
          clearInterval(interval);
        }
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };

  }, []);

  const resend = (e) => {
    e.preventDefault();
    let msgs = [];
    validateResend().then((res) => {
      if (res.status === 200 || res.status === 304) {
        msgs.push(res.data.msg);
        setmsg(msgs);
      } else {
        console.log(res);
      }
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
                {card_header}
                </h1>
              </Card.Title>
              <h3
                style={{
                  textAlign: "center",
                  fontWeight: "300",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                {card_text}
              </h3>
              <div className="notice">
                {msg.map((msg) => (
                  <h5 key={msg.indexOf(msg)}>{msg}</h5>
                ))}
              </div>
              <div className="text-center">
                <Button
                  className="btn--primary"
                  variant="primary"
                  hidden={resendFlag}
                  onClick={(e) => resend(e)}
                >
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

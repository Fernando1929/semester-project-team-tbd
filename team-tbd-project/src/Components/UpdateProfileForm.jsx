import React from "react";
import {
  Modal,
  Button,
  InputGroup,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import placeholder from "../Images/placeholder.png";
import Image from "react-bootstrap/Image";
import {
  profileGetHandler,
  profileUpdateHandler,
  profileEmailUpdateHandler,
} from "../Apis/UserProfile";

function UpdateProfileForm(props) {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [bio, setBio] = React.useState("");

  React.useEffect(() => {
    profileGetHandler().then((res) => {
      const user = res.data.user;
      setFirstname(user.user_firstname);
      setLastname(user.user_lastname);
      setEmail(user.email);
      setPhone(user.user_phone);
      setLocation(user.user_location);
      setBio(user.user_bio);
    });
  }, []);

  const updateProfile = (e) => {
    e.preventDefault();
    const user = {
      user_firstname: firstname,
      user_lastname: lastname,
      user_phone: phone,
      user_location: location,
      user_bio: bio,
      pref_start_work_hour: null,
      pref_end_end_hour: null,
    };

    profileUpdateHandler(user).then((res) => {
      if (res.status === 200) {
        const account = {
          email: email,
          account_id: res.data.data.user.account_id,
        };
        profileEmailUpdateHandler(account).then((res) => {
          console.log(res);
          if (res.status === 200) {
            props.onHide();
            window.location.assign("/Profile");
          }
        });
      }
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontSize: "30px" }}
        >
          UPDATE PROFILE INFORMATION
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="justify-content-center">
          <Image src={placeholder} width="300" height="300" roundedCircle />
        </Row>
        <Row className="justify-content-center">
          <Button
            className="btn--primary"
            variant="primary"
            style={{ marginTop: "0.5rem" }}
          >
            UPLOAD PICTURE
          </Button>
        </Row>

        {/* First Name input */}
        <InputGroup style={{ marginBottom: "1rem" }}>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className="fas fa-user"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="Name"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </InputGroup>

        {/* Last Name input */}
        <InputGroup style={{ marginBottom: "1rem" }}>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className="fas fa-user"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="Name"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </InputGroup>

        {/* Email input */}
        <InputGroup style={{ marginBottom: "1rem" }}>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className="far fa-envelope"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>

        {/* Phone Number input */}
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className="fas fa-phone-alt"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="Phone Number"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </InputGroup>
        <label className="text-muted" style={{ fontSize: "smaller" }}>
          Besides the leading ‘+’ in the country code, all characters should be
          numeric. Ex. +17871234567.
        </label>

        {/* Location input */}
        <InputGroup style={{ marginBottom: "1rem" }}>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className="fas fa-map-marker-alt"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="Location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </InputGroup>

        {/* Bio input */}
        <Form.Group controlId="Description">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="light">
          CLOSE
        </Button>
        <Button
          onClick={(e) => updateProfile(e)}
          className="btn--primary"
          variant="primary"
        >
          UPDATE
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateProfileForm;

import React from "react";
import {
  Modal,
  Button,
  InputGroup,
  Form,
  FormControl,
  Row,
  Col,
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
  const [startWorkingHour, setStartWorkingHour] = React.useState("");
  const [endWorkingHour, setEndWorkingHour] = React.useState("");
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

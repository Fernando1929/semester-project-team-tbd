import React from "react";
import { Modal, Button, InputGroup, Form, FormControl } from "react-bootstrap";
import Auth from "../utils/Auth";
import { addTeamHandler, getUserIdByEmailHandler } from "../Apis/Teams";
import { addTeamLeaderHandler, addTeamLeaderAsMemberHandler, getLeaderIdByUserIdHandler } from "../Apis/TeamLeader";
import { addTeamMemberHandler, getMemberIdByUserIdHandler } from "../Apis/TeamMembers";
import { addTeamMembershipHandler } from "../Apis/TeamMembership";

function CreateTeamForm(props) {
  const [team_name, setTeamName] = React.useState("");
  const [member_emails, setMemberEmails] = React.useState("");
  const [team_description, setTeamDescription] = React.useState("");

  const parse_emails = (email_string) => {
    let email_arr = email_string.split(",");
    for (var email of email_arr) {
      email = email.trim();
    }
    return email_arr;
  }

  const email_list_len = (email_arr) => {
    var len = 0;
    for (var email of email_arr) {
      len++;
    }
    return len;
  }

  const submit = async(e) => {
    e.preventDefault();

    const member_email_list = parse_emails(member_emails);
    let team = {};

    const addleader = (await addTeamLeaderHandler(Auth.getUserid())).valueOf();
    if (addleader.status === 201) {
      team = {
        team_name: team_name,
        team_description: team_description,
        team_leader_id: addleader.data.team_leader_id
      }
    } 
    else {
      const leader_id = (await getLeaderIdByUserIdHandler(Auth.getUserid())).valueOf().data.data.team.team_leader_id;
      team = {
        team_name: team_name,
        team_description: team_description,
        team_leader_id: leader_id
      }
    }
    const team_id = (await addTeamHandler(team)).valueOf().data.team_id;
    let team_membership = {};

    if(email_list_len(member_email_list) > 0) {

      for (var email of member_email_list) {
        const user_id = (await getUserIdByEmailHandler(email)).valueOf().data.data.user.user_id;
        const addmember = (await addTeamMemberHandler(user_id)).valueOf();
        if (addmember.status === 201) {
          team_membership = {
            team_id: team_id,
            team_member_id: addmember.data.team_member_id
          }
        }
        else {
          const team_member_id = (await getMemberIdByUserIdHandler(user_id)).valueOf().data.data.team.team_member_id;
          team_membership = {
            team_id: team_id,
            team_member_id: team_member_id
          }
        }
        await addTeamMembershipHandler(team_membership);        
      }

      const addleadermember = (await addTeamLeaderAsMemberHandler(Auth.getUserid())).valueOf();
      if (addleadermember.status === 201) {
        team_membership = {
          team_id: team_id,
          team_member_id: addleadermember.data.team_member_id
        }
      }
      else {
        const leadermember_id = (await getMemberIdByUserIdHandler(Auth.getUserid())).valueOf().data.data.team.team_member_id;
        team_membership = {
          team_id: team_id,
          team_member_id: leadermember_id
        }
      }
      await addTeamMembershipHandler(team_membership);
    }
    props.onHide();
    // props.history.push("/");
    window.location.reload();
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
          CREATE TEAM
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ fontSize: "20px" }}>Team Information</h4>

        <InputGroup style={{ marginBottom: "1rem" }}>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className="fas fa-users fa"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl id="Team Name" placeholder="Team Name" onChange={(e) => setTeamName(e.target.value)} />
        </InputGroup>

        <InputGroup style={{ marginBottom: "1rem" }}>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className="fas fa-user-plus"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl id="Members Emails" placeholder="Members Emails" onChange={(e) => setMemberEmails(e.target.value)} />
        </InputGroup>
        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3" onChange={(e) => setTeamDescription(e.target.value)} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="light">
          Close
        </Button>
        <Button className="btn--primary" variant="primary" onClick={(e) => submit(e)}>
          CREATE
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateTeamForm;

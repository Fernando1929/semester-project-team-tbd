import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { addMeetingOptionHandler, getMeetingOptionsHandler, voteCountUpdateHandler } from "../Apis/MeetingOptions";
import {withRouter} from "react-router-dom";

function VoteForm(props) {
  const { match: { params } } = props;
  const [meeting_options, setMeetingOptions] = React.useState([]);
  const [selected_meeting_id, setSelectedId] = React.useState(null);
  var Dates = [];

  React.useEffect(() =>{//Requested before the page is loaded
    getMeetingOptionsHandler(params.teamid).then(res => {
      if (res.status === 200){
        let r = [];
        r =  res.data.data.meetings
        fixx(r);
      }else{
        console.log(res.msg);
      }
    }
    )
  },[]);

  const submit = (e) => {
    e.prevetDefault();
    // como sacar el id o algo del meeting option seleccionado?
    // como restringirlo a solo una seleccion?
    // maybe un la tabla con solo un slot para llenar osea la opcion escogida (fecha)
    // se puede contar por el mismo valor y se puede diferenciar de otras 
    
    const meeting = {// no necesitas el member id para votar??
      team_id: params.teamid,
      meeting_option_id: selected_meeting_id,
    };

    //maybe add a way to undo the vote***
    voteCountUpdateHandler(meeting).then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log("Vote registered.");
        alert("Your vote has been registered.");
        // isVotingDone(team_id).then((res) =>{ //verifies if all the team members voted and return the meeting with more votes
        //   if(res.status === 200){
        //     //add the meeting to all the team members
        //     addMeetingToTeamScheduleHandler(meeting).then((res) => {
        //       //On the backend when adding the meeting to team schedule add on the team_members
        //     })
        //     alert("All team members have voted. The meeting with more votes is been added to your schedule.");
        //   }
        //   //Do not thing
        // });

        
        // update something somewhere in the db to indicate that the team member has voted
        // votes table for each team ?? and Once the voting has been completed is marked as done cuz data cannot be deleted idk
        
        // verify if all team members have voted
        // why not verify it everytime a team member votes then you remove the problem of constant checking 

        // if all members have voted, insert into team_schedule and every user_schedule
        // I think this is completely backend cuz is using user info 
        // Route that is called when everyone has completely voted
        // Backend method to add a meeting to all the members schedules including the team schedules

        
        props.onHide();
        props.history.push(`/TeamProfile/${params.teamid}`);
      }
    });
  }

  const fixx = (r) => {
      setMeetingOptions(r);
      // meeting_options.map((date) => {
      //   var date = new Date(date.start_date_time);
      //   date = date.toLocaleString();
  
      //   Dates.push(date);
      // });
  };

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontSize: "30px" }}
        >
          Please Select Meeting Hour
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {meeting_options.map((date) => {

          return (
            <center>
              <Button key={meeting_options.indexOf(date)}
                className="btn--secondary"
                style={{
                  marginBottom: "10px",
                }}
              >
                <Form.Check 
                  style={{
                    color: "white",
                    fontSize: "100%",
                    height: "40%",
                  }}
                  type="checkbox"
                  label={date.event_title}
                />
              </Button>
            </center>
          );
})}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="light">
          Close
        </Button>
        <Button className="btn--primary" variant="primary" onClick={(e) => submit()}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default withRouter(VoteForm);

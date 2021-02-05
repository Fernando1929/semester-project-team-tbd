import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { 
  addMeetingOptionHandler, 
  getMeetingOptionsHandler, 
  voteCountUpdateHandler, 
  voteHandler, 
  isVotingDoneHandler, 
  getFinalMeetingHandler,
  deleteOptionsByTeamHandler,
  deleteVotesByTeamHandler
 } from "../Apis/MeetingOptions";
import {getMemberIdByUserIdHandler, addMeetingToTeamMembersHandler} from "../Apis/TeamMembers";
import {addMeetingToTeamScheduleHandler} from "../Apis/TeamSchedule";
import {withRouter} from "react-router-dom";
import Auth from "../utils/Auth";

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


  const submit =(e) => {
    e.preventDefault();
    props.onHide();

    const user_id = parseInt(Auth.getUserid());

    getMemberIdByUserIdHandler(user_id).then((res) => {
      if(res.status === 200){// verify response
      
      const team_member_id = res.data.data.team.team_member_id;
      const vote = {
        team_member_id: team_member_id,
        meeting_option_id: selected_meeting_id,
      };
      
      const meeting = {
        team_id: params.teamid,
        meeting_option_id: selected_meeting_id,
      };
      
      voteHandler(vote).then( () => {//Add the vote to the table
        voteCountUpdateHandler(meeting).then((res) => {
          console.log("voteCountUpdateHandler")
          if (res.status === 200) {
            console.log("Vote registered.");
            //alert("Your vote has been registered.");
             isVotingDoneHandler(params.teamid).then((res) =>{ //verifies if all the team members voted and return the meeting with more votes
              console.log("isVotingDoneHandler");
              if(res.status === 200){
                  if(res.data.data === true){
                  getFinalMeetingHandler(params.teamid).then((res) => {
                    console.log("getFinalMeetingHandler");
                    //add the meeting to all the team members
                    const appointment = res.data.data.meeting[0];
                    console.log("meeting",res.data,appointment);
                    addMeetingToTeamScheduleHandler(appointment).then((res) => {
                      console.log("casi");
                        if(res.status === 201){
                          addMeetingToTeamMembersHandler(appointment).then((res) => {//On the backend when adding the meeting to team schedule add on the team_members
                            if(res.status === 201){
                              console.log("Done");
                              alert("All team members have voted. The meeting with the most votes has been added to your schedule.");
                              deleteVotesByTeamHandler(params.teamid).then((res) => {
                                if (res.status === 204) {
                                  console.log("Options votes deleted")
                                  deleteOptionsByTeamHandler(params.teamid).then((res) => {
                                    if (res.status === 204) {
                                      console.log("Meeting options deleted")
                                    }
                                  });
                                }
                              });
                            }  
                          });
                        }
                      });
                    });
                  }
                }
              });
            }
          });
        });
        
      }
    });  
    window.location.reload(false);
  }

  const fixx = (r) => {
      setMeetingOptions(r);
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
            <center key={meeting_options.indexOf(date)}>
              <Button 
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
                  label={(new Date(date.start_date_time).toLocaleString())}
                  onChangeCapture= {(e) => { setSelectedId(date.meeting_option_id)}}
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
        <Button className="btn--primary" variant="primary" onClick={(e) => submit(e)}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default withRouter(VoteForm);

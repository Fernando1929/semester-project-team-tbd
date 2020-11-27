import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { voteCountUpdateHandler } from "../Apis/MeetingOptions"

function VoteForm(props) {
  const { match: { params } } = props;
  const [meeting_options, setMeetingOptions] = React.useState([]);
  const [selected_meeting_id, setSelectedId] = React.useState(null);

  React.useEffect(() =>{//Requested before the page is loaded
    getMeetingOptionsHandler(params.teamid).then(res => {
      if (res.status === 200){
        setMeetingOptions(res.data.data.meetings);
      }else{//prints errors
        console.log(res.msg);
      }
    }
    )
  },[]);

  const submit = () => {
    // como sacar el id o algo del meeting option seleccionado?
    // como restringirlo a solo una seleccion?
    const meeting = {
      team_id: params.teamid,
      meeting_option_id: selected_meeting_id,
    };
    voteCountUpdateHandler(meeting).then((res) => {
      if (res.status === 200) {
        console.log("Vote registered.");
        alert("Your vote has been registered.");
        // update something somewhere in the db to indicate that the team member has voted

        // verify if all team members have voted

        // if all members have voted, insert into team_schedule and every user_schedule

        
        props.onHide();
        props.history.push(`/TeamProfile/${params.teamid}`);
      }
    });
  }

  var posibleDates = [
    {
      user_schedule_id: 1,
      event_title: "Free",
      start_date_time: "2020-11-09T12:00:00.057Z",
      end_date_time: "2020-11-09T22:00:00.000Z",
      r_rule: null,
      ex_dates: null,
      user_id: 1,
    },
    {
      user_schedule_id: 2,
      event_title: "Free",
      start_date_time: "2020-11-09T22:30:00.000Z",
      end_date_time: "2020-11-10T11:30:30.057Z",
      r_rule: null,
      ex_dates: null,
      user_id: 1,
    },
    {
      user_schedule_id: 3,
      event_title: "Free",
      start_date_time: "2020-11-10T21:30:00.000Z",
      end_date_time: "2020-11-11T11:30:30.057Z",
      r_rule: null,
      ex_dates: null,
      user_id: 1,
    },
  ];
  var fixDates = [];
  {
    posibleDates.map((date) => {
      var date = new Date(date.start_date_time);
      date = date.toLocaleString();

      fixDates.push(date);
    });
  }

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
        {fixDates.map((date) => {
          return (
            <center>
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
                  label={date}
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
        <Button
          onClick={props.onHide}
          className="btn--primary"
          variant="primary"
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VoteForm;

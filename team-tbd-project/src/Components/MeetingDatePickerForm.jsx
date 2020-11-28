import React from "react";
import { useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMeetingHours } from "../Algorithm/CalculateMeetingHour";
import { getLeaderUserInfoHandler, getLeaderScheduleHandler } from "../Apis/TeamLeader";
import { getMemberScheduleHandler, getAllMembersExceptLeaderHandler } from "../Apis/TeamMembers";
import { addMeetingOptionHandler } from "../Apis/MeetingOptions";


const reformat_time = (time) => {
  const orig_hours = parseInt(time.split(":")[0]);
  var res = orig_hours + ":" + time.split(":")[1];

  return res;
}

const mapMemberData = (member, schedule) => {
  return {
    id: member.team_member_id,
    schedule: schedule,
    preferredStartHours: reformat_time(member.pref_start_work_hour),
    preferredEndHours: reformat_time(member.pref_end_work_hour)
  };

};

const mapLeaderData = (leader, schedule) => {
  return {
    id: leader.user_id,
    schedule: schedule,
    preferredStartHours: reformat_time(leader.pref_start_work_hour),
    preferredEndHours: reformat_time(leader.pref_end_work_hour)
  };

};


function MeetingDatePickerForm(props) {
  const { match: { params } } = props;
  // From
  const [selectedDate, setSelectedDate] = useState(null);
  // To
  const [selectedDateTo, setSelectedDateTo] = useState(null);
  const [duration, setDuration] = useState("");

  // ADD FORM VALIDATION
  //

  const mapMeetingOptData = meeting => ({
    event_title: meeting.event_title,
    start_date_time: meeting.start_date_time,
    end_date_time: meeting.end_date_time,
    r_rule: meeting.r_rule,
    ex_dates: meeting.ex_dates,
    vote_count: 0,
    team_id: parseInt(params.teamid)
  });

  const buildmemberlist = async (members) => {
    try {
      var result = [];
      for (var team_member of members) {
        const response = (await getMemberScheduleHandler(team_member.user_id)).valueOf();
        const member_sched = response.data.data.schedule;
        result.push(mapMemberData(team_member, member_sched));
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  const generateMeeting = async(e) => {
    try {
      e.preventDefault();
      const hours = parseInt(duration.split(":")[0]);
      const minutes = parseInt(duration.split(":")[1]);

      const lead_sched = (await getLeaderScheduleHandler()).valueOf().data.data.schedule;
      const team_leader = mapLeaderData((await getLeaderUserInfoHandler()).valueOf().data.data.user, lead_sched);
      const absolute_members = (await getAllMembersExceptLeaderHandler(params.teamid)).valueOf().data.data.members;
      const team_members_list = await buildmemberlist(absolute_members);

      const meeting_options = getMeetingHours(
        team_members_list,
        team_leader,
        new Date(selectedDate).toISOString(),
        new Date(selectedDateTo).toISOString(),
        hours,
        minutes,
        "Team Meeting",
        params.teamid,
      ).map(mapMeetingOptData);

      // verify output
      console.log(meeting_options);

      for (var meeting of meeting_options) {
        await addMeetingOptionHandler(meeting);
      }

      alert("Meeting generation successful. \nThe voting process has begun.");
      props.onHide();
      // props.history.push(`/TeamProfile/${params.teamid}`);
      window.location.reload(false);

    } catch (error) {
      console.log(error);
    }
  }

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
          Choose Meeting Date
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ fontSize: "20px", color: "#005792" }}>FROM</h4>

        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
        <h4 style={{ fontSize: "20px", color: "#005792", marginTop: "1rem" }}>
          TO
        </h4>
        <DatePicker
          selected={selectedDateTo}
          onChange={(date) => setSelectedDateTo(date)}
        />

        <InputGroup className="mb-3" style={{ marginTop: "1.5rem" }}>
          <InputGroup.Prepend>
            <InputGroup.Text>DURATION</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="HH:MM" value={duration} onChange={(e) => setDuration(e.target.value)}/>
        </InputGroup>
        <h6>**Time Format e.g [01:00] = 1 hour**</h6>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="light">
          Close
        </Button>
        <Button className="btn--primary" variant="primary" onClick={(e) => generateMeeting(e)}>
          CREATE
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MeetingDatePickerForm;

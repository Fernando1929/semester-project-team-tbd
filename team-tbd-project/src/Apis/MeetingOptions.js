import axios from "axios";
import Auth from "../utils/Auth";

export const addMeetingOptionHandler = meeting =>{ 
    return axios
        .post(`http://localhost:3001/api/teams/${meeting.team_id}/meeting_options`,{meeting})
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const voteCountUpdateHandler = (meeting) =>{ 
    return axios
        .put(`http://localhost:3001/api/teams/${meeting.team_id}/meeting_options/${meeting.meeting_option_id}/vote`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}
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
        .put(`http://localhost:3001/api/teams/${meeting.team_id}/meeting_options/${meeting.meeting_option_id}/vote/${Auth.getUserid}`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getMeetingOptionsHandler = (team_id) => {
        console.log("getMeetingOptionsHandler");
        return axios
        .get(`http://localhost:3001/api/teams/${team_id}/meeting_options`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}


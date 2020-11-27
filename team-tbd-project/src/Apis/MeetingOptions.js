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
        .put(`http://localhost:3001/api/teams/${meeting.team_id}/meeting_options/${meeting.meeting_option_id}/votes`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getMeetingOptionsHandler = (team_id) => {
        return axios
        .get(`http://localhost:3001/api/teams/${team_id}/meeting_options`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const voteHandler = (vote) => {
    return axios
    .post(`http://localhost:3001/api/vote/meeting_options`,{vote})  
    .then( response => {
        return response
    })
    .catch(err => {
        return err.response
    })
}

export const isVotingDoneHandler = (team_id) => {
    return axios
    .get(`http://localhost:3001/api/vote/team/${team_id}/meeting_options/currentState`)
    .then( response => {
        return response
    })
    .catch(err => {
        return err.response
    })
}

export const getFinalMeetingHandler = (team_id) => {
    return axios
    .get(`http://localhost:3001/api/vote/team/${team_id}/meeting_options/final`)
    .then( response => {
        return response
    })
    .catch(err => {
        return err.response
    })
} 


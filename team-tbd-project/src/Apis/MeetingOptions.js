import axios from "axios";
import Auth from "../utils/Auth";

export const addMeetingOptionHandler = meeting =>{ 
    return axios
        .post(`/api/teams/${meeting.team_id}/meeting_options`,{meeting})
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const voteCountUpdateHandler = (meeting) =>{ 
    return axios
        .put(`/api/teams/${meeting.team_id}/meeting_options/${meeting.meeting_option_id}/votes`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getMeetingOptionsHandler = (team_id) => {
        return axios
        .get(`/api/teams/${team_id}/meeting_options`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const voteHandler = (vote) => {
    return axios
    .post(`/api/vote/meeting_options`,{vote})  
    .then( response => {
        return response
    })
    .catch(err => {
        return err.response
    })
}

export const isVotingDoneHandler = (team_id) => {
    return axios
    .get(`/api/vote/team/${team_id}/meeting_options/currentState`)
    .then( response => {
        return response
    })
    .catch(err => {
        return err.response
    })
}

export const getFinalMeetingHandler = (team_id) => {
    return axios
    .get(`/api/vote/team/${team_id}/meeting_options/final`)
    .then( response => {
        return response
    })
    .catch(err => {
        return err.response
    })
} 

export const voteCheckHandler = (team_id) => {
    return axios
    .get(`/api/vote/team/${team_id}/team_member/${Auth.getUserid()}`)
    .then( response => {
        return response
    })
    .catch(err => {
        return err.response
    })
}

export const deleteVotesByTeamHandler = (team_id) => {
    return axios
    .delete(`/api/vote/team/${team_id}/meeting_options/delete`)
    .then( response => {
        return response
    })
    .catch(err => {
        return err.response
    })
}

export const deleteOptionsByTeamHandler = (team_id) => {
    return axios
    .delete(`/api/teams/${team_id}/meeting_options`)
    .then( response => {
        return response
    })
    .catch(err => {
        return err.response
    })
}
import axios from "axios";
import Auth from "../utils/Auth";

export const addTeamMemberHandler = (user_id) => {
    return axios
        .post(`http://localhost:3001/api/teams/1/team_members`, {user_id}) // change to team id
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getMemberIdByUserIdHandler = (user_id) => {
    return axios
        .get(`http://localhost:3001/api/teams/1/team_members/${user_id}`) // fix team id
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getUserIdByMemberIdHandler = (team_member_id) => {
    return axios
        .get(`http://localhost:3001/api/teams/team_members/${team_member_id}/user`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getMemberScheduleHandler = (user_id) =>{ 
    return axios
        .get(`http://localhost:3001/api/users/${user_id}/schedule`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getAllMembersExceptLeaderHandler = (team_id) => {
    return axios
        .get(`http://localhost:3001/api/teams/${team_id}/team_members/absolute`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const addMeetingToTeamMembersHandler = appointment =>{ 
    return axios
        .post(`http://localhost:3001/api/vote/team/${appointment.team_id}/meeting_options/setevent`,appointment)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

// export const memberDeleteHandler = (team_member_id) =>{ 
//     return axios
//         .delete(`http://localhost:3001/api/teams/team_members/${team_member_id}`) 
//         .then( response => {
//             return response
//         })
//         .catch(err => {
//             return err.response
//         })
// }
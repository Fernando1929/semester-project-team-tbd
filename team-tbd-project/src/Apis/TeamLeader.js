import axios from "axios";
import Auth from "../utils/Auth";

export const addTeamLeaderHandler = (user_id) => {
    return axios
        .post(`http://localhost:3001/api/teams/1/team_leader`, {user_id}) // change to team id
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const addTeamLeaderAsMemberHandler = (user_id) => {
    return axios
        .post(`http://localhost:3001/api/teams/1/team_members`, {user_id}) // change to team id
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getLeaderIdByUserIdHandler = (user_id) => {
    return axios
        .get(`http://localhost:3001/api/teams/team_leader/${user_id}`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getTeamLeaderUserIdHandler = (team_id) => {
    return axios
        .get(`http://localhost:3001/api/teams/${team_id}/team_leader`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getLeaderUserInfoHandler = () => {
    return axios
        .get(`http://localhost:3001/api/users/${Auth.getUserid()}`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getLeaderScheduleHandler = () =>{ 
    return axios
        .get(`http://localhost:3001/api/users/${Auth.getUserid()}/schedule`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}
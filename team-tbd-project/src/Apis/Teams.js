import axios from "axios";
import Auth from "../utils/Auth";


export const addTeamHandler = (team) => {
    return axios
        .post(`http://localhost:3001/api/teams`, {team})
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const teamGetHandler = (team_id) => {
    return axios
        .get(`http://localhost:3001/api/teams/${team_id}`)
        .then( response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

export const teamGetAllInfoHandler = (team_id) => { // MUST UPDATE TO ADD VOTING AND SCHEDULE INFO
    return axios
        .get(`http://localhost:3001/api/teams/${team_id}/allinfo`)
        .then( response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

export const teamUpdateHandler = (team) => {
    return axios
        .put(`http://localhost:3001/api/teams/${team.team_id}`, {team})
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getUserIdByEmailHandler = (email) => {
    return axios
        .get(`http://localhost:3001/api/users/${email}`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getUserTeamsHandler = () => {
    return axios
        .get(`http://localhost:3001/api/teams/user/${Auth.getUserid()}`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}


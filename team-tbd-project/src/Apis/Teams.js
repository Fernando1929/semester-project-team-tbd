import axios from "axios";
import Auth from "../utils/Auth";


export const addTeamHandler = (team) => {
    return axios
        .post(`/api/teams`, {team})
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const teamGetHandler = (team_id) => {
    return axios
        .get(`/api/teams/${team_id}`)
        .then( response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

export const teamGetAllInfoHandler = (team_id) => { // MUST UPDATE TO ADD VOTING AND SCHEDULE INFO
    return axios
        .get(`/api/teams/${team_id}/allinfo`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const teamUpdateHandler = (team) => {
    return axios
        .put(`/api/teams/${team.team_id}`, {team})
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getUserIdByEmailHandler = (email) => {
    return axios
        .get(`/api/users/${email}/by_email`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getUserTeamsHandler = () => {
    return axios
        .get(`/api/teams/user/${Auth.getUserid()}`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const getRecentUserTeamsHandler = () => {
    return axios
        .get(`/api/teams/user/${Auth.getUserid()}/recent`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}
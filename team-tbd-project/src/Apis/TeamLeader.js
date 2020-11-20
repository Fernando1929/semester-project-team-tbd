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
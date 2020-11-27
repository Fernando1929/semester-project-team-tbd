import axios from "axios";
import Auth from "../utils/Auth";

export const addTeamMembershipHandler = (team_membership) => {
    return axios
        .post(`/api/teams/${team_membership.team_id}/team_membership`, {team_membership})
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const membershipDeleteHandler = (team_membership) =>{ 
    return axios
        .delete(`api/teams/${team_membership.team_id}/team_membership/${team_membership.team_member_id}`) 
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}
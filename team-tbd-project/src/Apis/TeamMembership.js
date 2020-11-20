// THIS WILL MAYBE NOT BE USED
// UPDATE: ok maybe we will

import axios from "axios";
import Auth from "../utils/Auth";

export const addTeamMembershipHandler = (team_membership) => {
    return axios
        .post(`http://localhost:3001/api/teams/${team_membership.team_id}/team_membership`, {team_membership})
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}
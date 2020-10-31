import axios from "axios";
import Auth from "../utils/Auth";

export const profileGetHandler = () => {
    return axios
        .get(`http://localhost:3001/api/users/${Auth.getUserid()}`) // change to /users/:id 
        .then( response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

export const profileUpdateHandler = (profile) => {
    return axios
        .put(`http://localhost:3001/api/users/${Auth.getUserid()}`, {profile}) // change to /users/:id
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}
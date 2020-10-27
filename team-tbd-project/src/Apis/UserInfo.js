import axios from "axios";

export const userInfoHandler = user => {
    return axios
        .post('http://localhost:3001/api/users/1', {user}) // change to users/:id
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}
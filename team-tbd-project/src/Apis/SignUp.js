import axios from "axios";

export const signupHandler = user => { 
    return axios
        .post('api/signup', {user})
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}
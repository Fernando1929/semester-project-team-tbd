import axios from "axios";

export const signupHandler = user => { 
    return axios
        .post('http://localhost:3001/api/signup', {user})
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}
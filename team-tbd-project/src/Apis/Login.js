import axios from 'axios';

export const loginHandler = user =>{ 
    return axios
        .post('http://localhost:3001/api/login',{user})
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}
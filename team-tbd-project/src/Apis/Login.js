import axios from 'axios';

export const loginHandler = user =>{ 
    return axios
        .post('/api/login',{user})
        .then( response => {
            localStorage.setItem('token',response.data.token)
            return response
        })
        .catch(err => {
            return err.response
        })
}
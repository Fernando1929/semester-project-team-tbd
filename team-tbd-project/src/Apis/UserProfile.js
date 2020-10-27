import axios from "axios";

export const profileGetHandler = () => {
    return axios
        .get('http://localhost:3001/api/users/1') // change to /users/:id
        .then( response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

export const profileUpdateHandler = profile => {
    return axios
        .put(`http://localhost:3001/api/users/1`, {profile}) // change to /users/:id
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}
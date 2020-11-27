import axios from "axios";
import Auth from "../utils/Auth";

export const validateResend = () =>{ 
    return axios
        .get(`http://localhost:3001/api/validation/resend/${Auth.getUserid()}`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const verifyValidation = () => {
    return axios
        .get(`http://localhost:3001/api/account/${Auth.getUserid()}`) // Auth returns account id
        .then( response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

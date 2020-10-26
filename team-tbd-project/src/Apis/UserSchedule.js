import axios from 'axios';
import Auth from "../utils/Auth";

export const scheduleAddHandler = appointment =>{ 
    console.log(appointment);
    return axios
        .post(`http://localhost:3001/api/users/${Auth.getUserid()}/schedule`,{appointment})
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const scheduleGetHandler = () =>{ 
    return axios
        .get(`http://localhost:3001/api/users/${Auth.getUserid()}/schedule`)
        .then( response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

export const scheduleUpdateHandler = (appointment) =>{ 
    return axios
        .put(`http://localhost:3001/api/users/${Auth.getUserid()}/schedule/${appointment.user_schedule_id}`, {appointment})
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const scheduleDeleteHandler = (appointment_id) =>{ 
    return axios
        .delete(`http://localhost:3001/api/users/${Auth.getUserid()}/schedule/${appointment_id}`) 
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}
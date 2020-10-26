import axios from 'axios';

export const scheduleAddHandler = appointment =>{ 
    console.log(appointment);
    return axios
        .post('http://localhost:3001/api/users/1/schedule',{appointment}) // change to /users/:id
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const scheduleGetHandler = () =>{ 
    return axios
        .get('http://localhost:3001/api/users/1/schedule')
        .then( response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}

// SHOULD BE THIS ONE
// export const scheduleGetHandler = (user_id) =>{ 
//     return axios
//         .get(`http://localhost:3001/api/users/${user_id}/schedule`)
//         .then( response => {
//             return response.data
//         })
//         .catch(err => {
//             return err.response
//         })
// }

export const scheduleUpdateHandler = (appointment) =>{ 
    return axios
        .put(`http://localhost:3001/api/users/1/schedule/${appointment.user_schedule_id}`, {appointment}) // change to /users/:id
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}

export const scheduleDeleteHandler = (appointment_id) =>{ 
    return axios
        .delete(`http://localhost:3001/api/users/1/schedule/${appointment_id}`) // change to /users/:id
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}
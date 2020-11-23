import axios from 'axios';

// export const scheduleAddHandler = appointment =>{ 
//     return axios
//         .post(`http://localhost:3001/api/teams/${appointment.team_id}/schedule`,{appointment})
//         .then( response => {
//             return response
//         })
//         .catch(err => {
//             return err.response
//         })
// }

export const getMostRecentEventsHandler = (team_id) =>{ 
    return axios
        .get(`http://localhost:3001/api/teams/${team_id}/schedule/recent`)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}
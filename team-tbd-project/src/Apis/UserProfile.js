import axios from "axios";
import Auth from "../utils/Auth";

export const profileGetHandler = () => {
  return axios
    .get(`/api/users/${Auth.getUserid()}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response;
    });
};

export const profileUpdateHandler = (profile) => {
  return axios
    .put(`/api/users/${Auth.getUserid()}`, { profile })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const profileEmailUpdateHandler = (account) => {
  return axios
    .put(`/api/account/email/${account.account_id}`, { account })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

// export const profileAccountUpdateHander = (account) => {
//     return axios
//         .put(`/api/account/${account.account_id}`, {account})
//         .then( response => {
//             return response
//         })
//         .catch(err => {
//             return err.response
//         })
// }

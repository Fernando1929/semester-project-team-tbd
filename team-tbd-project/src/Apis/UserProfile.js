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

export const profilePictureUpdateHandler = (formData, config) => {
    return axios
        .put(`/api/users/${Auth.getUserid()}/picture`, formData, config)
        .then( response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}


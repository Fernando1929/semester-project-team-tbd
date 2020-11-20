import axios from "axios";
import Auth from "../utils/Auth";

export const validateResend = () => {
  return axios
    .get(`/api/validation/resend/${Auth.getUserid()}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

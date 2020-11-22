import axios from "axios";

//proxy

export const loginHandler = (user) => {
  return axios
    .post("/api/login", { user })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

import axios from "axios";

export const userInfoHandler = (user) => {
  return axios
    .post("/api/users", { user })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

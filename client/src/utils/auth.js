import axios from "axios";

export const login = ({ email, password }) => {
  return axios
    .post(
      "http://localhost:1337/user/login",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response.data.token);
      if (response.data.token) {
        localStorage.setItem("user", response.data.token);
      }
      console.log(response.data.data);

      return response.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

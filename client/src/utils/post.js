import axios from "axios";

const TOKEN = localStorage.getItem("user");

export const getPost = () => {
  return axios
    .get("http://localhost:1337/post/get-all", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        console.log(response.data.data);
        return response.data.data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createPost = ({ title, content }) => {
  return axios
    .post(
      "http://localhost:1337/post/create",
      {
        title: title,
        content: content,
      },
      {
        headers: {
          Authorization: `${TOKEN}`,
          "Content-Type": "application/json, Authorization",
        },
      }
    )
    .then((response) => {
      console.log(TOKEN);
      console.log(response.status);
      if (response.status === 200) {
        return response.data.data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

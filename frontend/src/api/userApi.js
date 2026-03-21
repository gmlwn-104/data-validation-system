import axios from "axios";

const API_URL = "http://localhost:8080/users";

export const getUsers = (keyword = "", page = 0, size = 10) => {
  return axios
    .get(`/api/users?keyword=${keyword}&page=${page}&size=${size}`)
    .then(res => res.data);
};

export const addUser = (user) => {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
};

export const deleteUser = (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
};

export const updateUser = (id, user) => {
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
};
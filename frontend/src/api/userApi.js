const API_URL = "http://localhost:8080/users";

export const getUsers = () => {
  return fetch(API_URL).then(res => res.json());
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
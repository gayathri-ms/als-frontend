import { API } from "../components/variables";

export const addExpenses = (form, user, token) => {
  return fetch(`${API}/expense/add/${user._id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(form),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getExpenses = (user, token) => {
  return fetch(`${API}/expense/getAll/${user._id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

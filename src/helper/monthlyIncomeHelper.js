import { API } from "../components/variables";

export const addIncome = (month, user, token) => {
  return fetch(`${API}/income/add/${user._id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ month: month }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getIncome = (user, token) => {
  return fetch(`${API}/income/get/${user._id}`, {
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

export const updateIncome = (month, user, token) => {
  return fetch(`${API}/income/update/${user._id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      month: month,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

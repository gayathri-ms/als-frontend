// const API = "http://localhost:3000";
import { API } from "../components/variables";

export const createCompany = (form, user, token) => {
  return fetch(`${API}/company/addcompany/${user._id}`, {
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

export const editCompany = (form, user, token) => {
  return fetch(`${API}/company/update/${user._id}`, {
    method: "PUT",
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
    .catch((err) => {
      console.log(err);
    });
};

export const getAllCompanies = (user, token) => {
  return fetch(`${API}/company/getallcompany/${user._id}`, {
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
export const getRate = (company_name, user, token) => {
  return fetch(`${API}/company/getrate/${user._id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ company_name: company_name }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

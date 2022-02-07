// import { API } from "../backend";
const API = "http://localhost:3000";

// const { user, token } = isAuthenticated();

export const createInsurance = (form, user, token) => {
  return fetch(`${API}/insurance/addinsurance/${user._id}`, {
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

export const getAllInsurance = (user, token) => {
  return fetch(`${API}/insurance/getall/${user._id}`, {
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

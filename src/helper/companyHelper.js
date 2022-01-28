// import { API } from "../backend";
const API = "https:://localhost:3000";

//const { user, token } = isAuthenticated();

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

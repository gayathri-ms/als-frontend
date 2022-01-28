import { API } from "../backend";

//const { user, token } = isAuthenticated();

export const createForm = (form, user, token) => {
  return fetch(`${API}/load/addload/${user._id}`, {
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

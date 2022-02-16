import { API } from "../components/variables";

export const getAllMonthlySalary = (user, token) => {
  return fetch(`${API}/monthlySalary/getAll/${user._id}`, {
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

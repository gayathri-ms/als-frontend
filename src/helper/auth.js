// import { API } from "../backend";

const API = "http://localhost:3000";

export const signup = (username, email, password) => {
  return fetch(`${API}/users/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const signin = (user) => {
  // console.log("user", user);
  return fetch(`${API}/users/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
    return fetch(`${API}/signout`, {
      method: "GET",
    })
      .then((response) => console.log("signout success"))
      .catch((err) => console.log(err));
  }
};

export const isAuthenticated = () => {
  // console.log('is authenticate method AT LINE 56');
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt") !== "undefined") {
    // console.log("jwt", localStorage.getItem("jwt"));
    // console.log('returing a TOKEN back at 61' + localStorage.getItem('jwt'));
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

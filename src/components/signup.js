import React, { useState } from "react";
import { authenticate, isAuthenticated, signup } from "../helper/auth";
import { frontend } from "./variables";

const Signup = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [deliver, setDeliver] = useState("");
  const { username, email, password } = values;

  const onHandle = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const performRedirect = () => {
    window.location.reload(false);
    // console.log("isAuthen", isAuthenticated());
    if (isAuthenticated()) {
      window.location.replace(`${frontend}login`);
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log("value", values);
    if (
      values.email !== "" &&
      values.username !== "" &&
      values.password !== ""
    ) {
      fetch(
        `https://emailvalidation.abstractapi.com/v1/?api_key=7e6d95c0ee1545f19c985fbd7adb8723&email=${values.email}`
      )
        .then((response) => response.json())
        .then((data) => {
          setDeliver(data.deliverability);
          console.log(deliver);

          if (data.deliverability === "DELIVERABLE") {
            signup(username, email, password)
              .then((data) => {
                if (data.err) {
                  setMsg("Email already exists");
                } else authenticate(data, () => setRedirect(true));
              })
              .catch((err) => console.log(err));
            setValues({ ...values, username: "", email: "", password: "" });
          } else setMsg("Enter the valid email address");
        });
    } else {
      if (values.email === "") setMsg("Enter the email address");
      if (values.username === "") setMsg("Enter the username");
      if (values.password === "") setMsg("Enter the password");
    }
  };
  return (
    <div>
      <div
        className="fixed z-10 -mt-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-red-100 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block outline-red-700 shadow-md align-bottom bg-orange-200 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h1
                  className="text-2xl  text-center leading-6 font-bold text-gray-900"
                  id="modal-title"
                >
                  SIGN UP
                </h1>
                <div className="mt-2">
                  <p className="text-sm text-center text-gray-500">
                    Please enter your email and password
                  </p>
                </div>
              </div>
            </div>
            <div>
              <form
                onSubmit={onHandleSubmit}
                className="bg-white rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-lg font-bold mb-2">
                    Name
                  </label>
                  <input
                    onChange={onHandle("username")}
                    value={username}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-lg font-bold mb-2">
                    Email
                  </label>
                  <input
                    onChange={onHandle("email")}
                    value={email}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline"
                    type="email"
                    placeholder="Username"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-lg font-bold mb-2">
                    Password
                  </label>
                  <input
                    onChange={onHandle("password")}
                    value={password}
                    className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight  focus:shadow-outline"
                    type="password"
                    placeholder="******************"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-lg font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-lg"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="text-red-500 mt-5 text-lg text-center">
                  {" "}
                  {msg}{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>{redirect ? <div>{performRedirect()}</div> : ""}</div>
    </div>
  );
};

export default Signup;

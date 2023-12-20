import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authenticate, isAuthenticated, signin } from "../helper/auth";
import Sidebar from "./sidebar/sidebar";
import { frontend } from "./variables";

const Sample = () => {
  const [next, setNext] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { email, password } = values;
  const onHandle = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log("value", values);
    signin(values)
      .then((data) => {
        console.log("data", data);
        if (data.err) {
          setMsg(data.err);
          setValues({ ...values, email: "", password: "" });
        } else {
          //if (data.user.role === 1) 
          authenticate(data, () => setRedirect(true));
          // else
          //   setMsg(
          //     "Only admin has the permission or authority to see the details!!"
          //   );
        }
      })
      .catch((err) => console.log(err));
  };
  const performRedirect = () => {
    window.location.reload(false);
    // console.log("isAuthen", isAuthenticated());
    if (isAuthenticated()) {
      window.location.replace(`${frontend}`);
    }
  };
  return (
    <div>
      {/* <Sidebar /> */}

      <div
        className="fixed z-10 -mt-24 inset-0 overflow-y-auto"
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
                  LOGIN
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
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline"
                    onChange={onHandle("email")}
                    value={email}
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-lg font-bold mb-2">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight  focus:shadow-outline"
                    onChange={onHandle("password")}
                    value={password}
                    type="password"
                    placeholder="******************"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-lg font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-lg"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center mb-5">
                  {msg === "Updated Successfully" ? (
                    <div className="font-medium mt-5 capitalize text-center text-2xl text-green-700">
                      {msg}
                    </div>
                  ) : (
                    <div className="font-medium mt-5 capitalize text-center text-2xl text-red-700">
                      {msg}
                    </div>
                  )}{" "}
                </div>
                <div className="bg-white text-center mt-8">
                  <p>
                    Don't have an account?{" "}
                    <span className="text-blue-700">
                      <button onClick={() => setNext(true)}>
                        <Link to="/signup">Signup</Link>
                      </button>
                    </span>
                  </p>
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

export default Sample;

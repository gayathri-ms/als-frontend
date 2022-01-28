import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../helper/auth";

const Home = () => {
  return (
    <div className="">
      {isAuthenticated() ? (
        "Home"
      ) : (
        <div className="text-center">
          <div>
            <p>You are not signed in</p>
          </div>
          <div>
            <button className="mt-8 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-lg font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-lg">
              <Link to="/login">Signin</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

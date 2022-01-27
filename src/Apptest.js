import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Signin from "./components/signin";
// import { isAuthenticated } from "./helper/auth";
import Signup from "./components/signup";
import App from "./App";
import Sidebar from "./components/sidebar/sidebar";
import Company from "./components/company";
import Home from "./components/home";
import Vehicle from "./components/vehicle";

const Apptest = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Sidebar />
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/company" element={<Company />} />
          <Route path="/vehicle" element={<Vehicle />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Apptest;

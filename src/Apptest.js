import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import "./App.css";
import Signin from "./components/signin";
// import { isAuthenticated } from "./helper/auth";
import Signup from "./components/signup";
import App from "./App";
import Sidebar from "./components/sidebar/sidebar";
import Company from "./components/company";
import Home from "./components/home";
import Vehicle from "./components/vehicle";
import Form from "./components/form";
import Phoneno from "./components/phoneno";
import Companyname from "./components/companyname";
import Updateamt from "./components/updateamt";
import Dis_inv from "./components/dis_inv";
import Dis_comp from "./components/dis_comp";
import Dis_vehicleNo from "./components/dis_vehicleNo";
import Dis_date from "./components/display_date";

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
          <Route path="/form" element={<Form />} />
          <Route path="/phoneno" element={<Phoneno />} />
          <Route path="/companyname" element={<Companyname />} />
          <Route path="/updateamount" element={<Updateamt />} />
          <Route path="/display_invoice" element={<Dis_inv />} />
          <Route path="/display_comp" element={<Dis_comp />} />
          <Route path="/display_vehicle_no" element={<Dis_vehicleNo />} />
          <Route path="/display_date" element={<Dis_date />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Apptest;

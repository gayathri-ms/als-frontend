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
import Dis_date from "./components/dis_date";
import Individual from "./components/individual";
import Balanceamount from "./components/balanceamount";
import Spares from "./components/sparesForm";
import Dis_spare from "./components/dis_spare";
import Diesel from "./components/diesel";
import Dis_diesel from "./components/dis_diesel";
import Petrol from "./components/petrol";
import Dis_petrol from "./components/dis_petrol";
import Insurance from "./components/insurance";
import Fc from "./components/fc";
import Dis_insurance from "./components/dis_insurance";
import Dis_fc from "./components/dis_fc";
import Labour_form from "./components/labour_form";
import Dis_labour from "./components/dis_labour";
import Attendance from "./components/attendance";
import Dis_attendance from "./components/dis_attendance";
import ExtraSalary from "./components/extraSalary";
import UpdateSal from "./components/updateSal";
import MonthlySalary from "./components/monthlySalary";
import Expenses from "./components/expenses";
import Dis_expenses from "./components/dis_expenses";

const Apptest = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Sidebar />
      <div className="mt-28">
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
          <Route path="/individual_form" element={<Individual />} />
          <Route path="/balanceamount" element={<Balanceamount />} />
          <Route path="/spareform" element={<Spares />} />
          <Route path="/display_spare" element={<Dis_spare />} />
          <Route path="/dieselform" element={<Diesel />} />
          <Route path="/display_diesel" element={<Dis_diesel />} />
          <Route path="/petrolform" element={<Petrol />} />
          <Route path="/display_petrol" element={<Dis_petrol />} />
          <Route path="/insurance_form" element={<Insurance />} />
          <Route path="/fc_form" element={<Fc />} />
          <Route path="/display_insurance" element={<Dis_insurance />} />
          <Route path="/display_fc" element={<Dis_fc />} />
          <Route path="/labour_form" element={<Labour_form />} />
          <Route path="/display_labour" element={<Dis_labour />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/display_attendance" element={<Dis_attendance />} />
          <Route path="/extrasalary" element={<ExtraSalary />} />
          <Route path="/updatesalary" element={<UpdateSal />} />
          <Route path="/monthlysalary" element={<MonthlySalary />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/display_expenses" element={<Dis_expenses />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Apptest;

import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../helper/auth";
import { createInsurance } from "../helper/insuranceHelper";
import { getAllVehicle } from "../helper/vehicleHelper";

const Insurance = () => {
  const [values, setValues] = useState({
    vehicle_no: "",
    amount: 0,
    company_name: "",
    tax_amt: 0,
    permit_date: "",
    expired_date: "",
    pollution_cer: "",
    pollution_expire: "",
  });

  const [vehicles, setVehicles] = useState([]);
  //   const [companies, setCompanies] = useState([]);

  const {
    vehicle_no,
    amount,
    company_name,
    tax_amt,
    permit_date,
    expired_date,
    pollution_cer,
    pollution_expire,
  } = values;

  const users = isAuthenticated();
  const [msg, setMsg] = useState("");

  const onHandle = (name) => (e) => {
    // console.log("name>>", name);
    setValues({ ...values, [name]: e.target.value });
  };

  useEffect(() => {
    getAllVehicle(users.user, users.token)
      .then((data) => {
        if (data.err) {
          setMsg(data.err);
        }
        if (data.length === 0) {
          setMsg("Add Vehicles");
        }
        setVehicles(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log("values", values);
    if (
      company_name !== "" &&
      vehicle_no !== "" &&
      amount !== 0 &&
      tax_amt !== 0
    ) {
      createInsurance(values, users.user, users.token).then((data) => {
        if (data.err) {
          setMsg(data.err);
        }
        setValues({
          ...values,
          vehicle_no: "",
          amount: 0,
          company_name: "",
          tax_amt: 0,
          permit_date: "",
          expired_date: "",
          pollution_cer: "",
          pollution_expire: "",
        });
        setMsg("Added Successfully");
      });
    } else {
      if (company_name === "") setMsg("Fill the Company Name");
      if (vehicle_no === "") setMsg("Fill the Vehicle Number");
      if (amount === 0) setMsg("Fill the Amount");
      if (tax_amt === 0) setMsg("Fill the Tax Amount");
    }
  };

  return (
    <div className="">
      <div className=" mx-auto">
        <div className="max-w-2xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
          <div>
            <form onSubmit={onHandleSubmit}>
              <div className="md:flex border-t-2 border-b-2 border-red-200">
                <div className="mb-6 mt-5 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Vehicle No
                  </label>
                  <select
                    onChange={onHandle("vehicle_no")}
                    value={vehicle_no}
                    className="w-full ml-5 my_dropdown md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  >
                    <option>Select</option>
                    {vehicles.map((vehicle, index) => {
                      return (
                        <option key={index} value={vehicle.vehicle_no}>
                          {vehicle.vehicle_no}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="md:flex">
                <div className="mt-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Company Name
                  </label>
                  <input
                    type="text"
                    onChange={onHandle("company_name")}
                    value={company_name}
                    placeholder="Company Name"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mt-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Amount
                  </label>
                  <input
                    type="number"
                    onChange={onHandle("amount")}
                    value={amount}
                    placeholder="Amount"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>

              <div className="md:flex">
                <div className="mb-6 mt-5 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Permit Date
                  </label>
                  <input
                    type="date"
                    onChange={onHandle("permit_date")}
                    value={permit_date}
                    placeholder="Permit date"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mb-6 mt-5 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Expired Date
                  </label>
                  <input
                    type="date"
                    onChange={onHandle("expired_date")}
                    value={expired_date}
                    placeholder="expired date"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>

              <div className="md:flex">
                <div className="mb-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Pollution Certificate
                  </label>
                  <input
                    type="text"
                    onChange={onHandle("pollution_cer")}
                    placeholder="pollution certificate"
                    value={pollution_cer}
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mb-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Pollution Expired Certificate
                  </label>
                  <input
                    type="date"
                    onChange={onHandle("pollution_expire")}
                    placeholder="Pollution Expire"
                    value={pollution_expire}
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>
              <div className="mb-6 mr-5">
                <label className=" mb-8 text-lg font-medium text-pink-600">
                  Tax Amount
                </label>
                <input
                  type="number"
                  onChange={onHandle("tax_amt")}
                  placeholder="Tax Amount"
                  value={tax_amt}
                  required
                  className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>

              <div className="mb-6 mt-10 text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-lg font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:ml-3 sm:w-auto sm:text-lg"
                >
                  Add Insurance Details
                </button>
              </div>
            </form>
            <div>
              {msg === "Added Successfully" ? (
                <div className="font-medium mt-5 text-center text-2xl text-green-700">
                  {msg}
                </div>
              ) : (
                <div className="font-medium mt-5 text-center text-2xl text-red-700">
                  {msg}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;

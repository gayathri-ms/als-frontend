import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../helper/auth";
import { getAllCompanies, getRate } from "../helper/companyHelper";
import { createFc } from "../helper/fcHelper";
import { getAllVehicle } from "../helper/vehicleHelper";

const Fc = () => {
  const [values, setValues] = useState({
    vehicle_no: "",
    expenses: 0,
    broker_name: "",
    place: "",
    expired_date: "",
  });

  const [vehicles, setVehicles] = useState([]);
  const [companies, setCompanies] = useState([]);

  const { vehicle_no, expenses, broker_name, place, expired_date } = values;

  const users = isAuthenticated();
  const [msg, setMsg] = useState("");

  const onHandle = (name) => (e) => {
    console.log("name>>", name);
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
    if (vehicle_no !== "") {
      createFc(values, users.user, users.token).then((data) => {
        if (data.err) {
          setMsg(data.err);
        }
        setValues({
          ...values,
          vehicle_no: "",
          expenses: 0,
          broker_name: "",
          place: "",
          expired_date: "",
        });
        setMsg("Added Successfully");
      });
    } else {
      if (vehicle_no === "") setMsg("Fill the Vehicle Number");
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
                    Broker Name
                  </label>
                  <input
                    type="text"
                    onChange={onHandle("broker_name")}
                    value={broker_name}
                    placeholder="Name"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mt-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Expenses
                  </label>
                  <input
                    type="number"
                    onChange={onHandle("expenses")}
                    value={expenses}
                    placeholder="Expenses"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>
              <div className="md:flex">
                <div className="mb-6 mt-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Place
                  </label>
                  <input
                    type="text"
                    onChange={onHandle("place")}
                    value={place}
                    placeholder="Place"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>

                <div className="mb-6 mt-6  mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Expired date
                  </label>
                  <input
                    type="number"
                    onChange={onHandle("expired_date")}
                    value={expired_date}
                    placeholder="Expired date"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
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

export default Fc;

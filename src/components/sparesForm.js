import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../helper/auth";
import { createSpare } from "../helper/spareHelper";
import { getAllVehicle } from "../helper/vehicleHelper";

const Spares = () => {
  const [values, setValues] = useState({
    name: "",
    rate: 0,
    reason: "",
    vehicle_no: "",
    place: "",
  });

  const [vehicles, setVehicles] = useState([]);

  const { name, rate, reason, vehicle_no, place } = values;

  const users = isAuthenticated();
  const [msg, setMsg] = useState("");
  const onHandle = (name) => (e) => {
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
    if (vehicle_no !== "" && rate !== 0) {
      createSpare(values, users.user, users.token).then((data) => {
        if (data.err) {
          setMsg(data.err);
        } else {
          setValues({
            ...values,
            name: "",
            rate: 0,
            reason: "",
            vehicle_no: "",
            place: "",
          });
          setMsg("Added Successfully");
        }
      });
    } else {
      if (vehicle_no === "") setMsg("Fill the Vehicle Number");
      if (rate === 0) setMsg("Rate is not filled!");
    }
  };

  return (
    <div className="">
      <div className=" mx-auto">
        <div className="max-w-2xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
          <div>
            <form onSubmit={onHandleSubmit}>
              <div className="md:flex border-t-2 border-b-2 border-red-200"></div>

              <div className="md:flex mt-5">
                <div className="mb-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Name
                  </label>
                  <input
                    type="text"
                    onChange={onHandle("name")}
                    value={name}
                    placeholder="Name"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mb-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Rate
                  </label>
                  <input
                    type="number"
                    onChange={onHandle("rate")}
                    placeholder="Rate"
                    value={rate}
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>
              <div className="mb-6 mr-5">
                <label className=" mb-8 text-lg font-medium text-pink-600">
                  Reason
                </label>
                <input
                  type="text"
                  onChange={onHandle("reason")}
                  placeholder="Reason"
                  value={reason}
                  required
                  className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div className="md:flex">
                <div className="mb-6 mr-5">
                  <label className=" mb-8  text-lg font-medium text-pink-600">
                    Vehicle No
                  </label>
                  <select
                    onChange={onHandle("vehicle_no")}
                    value={vehicle_no}
                    className="w-full my_dropdown md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
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
                <div className="mb-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Place
                  </label>
                  <input
                    type="text"
                    onChange={onHandle("place")}
                    placeholder="place"
                    value={place}
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>

              <div className="mb-6 mt-10 text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-lg font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:ml-3 sm:w-auto sm:text-lg"
                >
                  Add Spares
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

export default Spares;

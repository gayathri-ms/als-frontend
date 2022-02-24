import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../helper/auth";
import { getAllCompanies, getRate } from "../helper/companyHelper";
import { createExtras } from "../helper/extrasHelper";
import { createForm } from "../helper/formHelper";
import { getAllVehicle } from "../helper/vehicleHelper";
import Ind_extra_salary from "./ind_extra_salary";

const ExtraSalary = () => {
  const [values, setValues] = useState({
    vehicle_no: "",
    no_loads: 0,
    no_labour: 0,
    extra: 0,
    laboursArray: [],
  });

  const [vehicles, setVehicles] = useState([]);
  const [companies, setCompanies] = useState([]);

  const { vehicle_no, no_loads, no_labour, extra, laboursArray } = values;

  const users = isAuthenticated();
  const [msg, setMsg] = useState("");

  const onHandle = (name) => (e) => {
    // console.log("name>>", name);
    setValues({ ...values, [name]: e.target.value });
  };

  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }

  const list = range(0, no_labour - 1);

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
    if (vehicle_no !== "" && no_loads !== 0 && no_labour !== 0 && extra !== 0) {
      createExtras(values, users.user, users.token).then((data) => {
        if (data.err) {
          setMsg(data.err);
        }
        setValues({
          ...values,
          vehicle_no: "",
          no_loads: 0,
          no_labour: 0,
          extra: 0,
          laboursArray: [],
        });
        setMsg("Added Successfully");
      });
    } else {
      if (vehicle_no === "") setMsg("Fill the Vehicle Number");
      if (no_loads === 0) setMsg("Fill the total number of Loads");
      if (no_labour === 0) setMsg("Fill the total number of Labours");
      if (extra === 0) setMsg("Fill the amount per load");
    }
  };

  return (
    <div className="">
      <div className=" mx-auto">
        <div className="max-w-2xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
          <div>
            <form onSubmit={onHandleSubmit}>
              <div className="md:flex border-t-2 border-b-2 border-red-200">
                <div className="mb-6 mt-5 mr-5 md:w-1/3">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
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
              </div>

              <div className="md:flex">
                <div className="mb-6 mr-5 md:w-1/3">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    No of Loads
                  </label>
                  <input
                    type="number"
                    onChange={onHandle("no_loads")}
                    value={no_loads}
                    placeholder="no of loads"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mb-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Amount per person
                  </label>
                  <input
                    type="number"
                    onChange={onHandle("extra")}
                    value={extra}
                    placeholder="Amount per person"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mb-6 mr-5 md:w-1/3">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    No of Labours
                  </label>
                  <input
                    type="number"
                    onChange={onHandle("no_labour")}
                    placeholder="no of labours"
                    value={no_labour}
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>
              <div>
                <div>
                  <div className="flex flex-col mx-5 text-center">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block py-2 min-w-fit sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-md sm:rounded-lg">
                          <table className="min-w-fit">
                            <thead className="bg-gray-200 dark:bg-gray-700">
                              <tr>
                                <th
                                  scope="col"
                                  className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                  Labour Id
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                  Labour Name
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                ></th>
                              </tr>
                            </thead>
                            <tbody>
                              {list.map((_, i) => {
                                return (
                                  <Ind_extra_salary
                                    key={i}
                                    index={i}
                                    values={values}
                                    setValues={setValues}
                                    laboursArray={laboursArray}
                                  />
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="mb-6 mt-10 text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-lg font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:ml-3 sm:w-auto sm:text-lg"
                >
                  Add Company
                </button>
              </div> */}
              <div className="text-center mt-8">
                {laboursArray.length === Number(no_labour) ? (
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-lg font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:ml-3 sm:w-auto sm:text-lg"
                  >
                    Add
                  </button>
                ) : (
                  ""
                )}
              </div>
              {/* {console.log(values)} */}
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

export default ExtraSalary;

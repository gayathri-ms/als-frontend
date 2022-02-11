import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../helper/auth";
import { getAllCompanies, getRate } from "../helper/companyHelper";
import { createForm } from "../helper/formHelper";
import { createLabour } from "../helper/labourHelper";
import { getAllVehicle } from "../helper/vehicleHelper";

const Labour_form = () => {
  const [values, setValues] = useState({
    labour_name: "",
    l_id: "",
    address: "",
    adv_amt: 0,
    advance: "",
    phone: "",
    salary: 0,
  });

  const { labour_name, l_id, address, adv_amt, advance, phone, salary } =
    values;

  const users = isAuthenticated();
  const [msg, setMsg] = useState("");

  const onHandle = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log("values", values);
    if (
      labour_name !== "" &&
      l_id !== "" &&
      advance !== "" &&
      address !== "" &&
      salary !== 0
    ) {
      createLabour(values, users.user, users.token).then((data) => {
        if (data.err) {
          setMsg(data.err);
        }
        setValues({
          ...values,
          labour_name: "",
          l_id: "",
          address: "",
          adv_amt: 0,
          advance: "",
          phone: "",
          salary: 0,
        });
        setMsg("Added Successfully");
      });
    } else {
      if (labour_name === "") setMsg("Fill the Labour Name");
      if (address === "") setMsg("Fill the address of the labour");
      if (salary === 0) setMsg("Fill the Salary");
      if (advance === "") setMsg("Select the advance");
      if (l_id === "") setMsg("Select the Labour id");
    }
  };

  return (
    <div className="">
      <div className=" mx-auto">
        <div className="max-w-2xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
          <div>
            <form onSubmit={onHandleSubmit}>
              <div className="md:flex">
                <div className="mb-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Labour Id
                  </label>
                  <input
                    type="text"
                    onChange={onHandle("l_id")}
                    value={l_id}
                    placeholder="Labour Id"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>
              <div className="md:flex">
                <div className="mb-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Labour Name
                  </label>
                  <input
                    type="text"
                    onChange={onHandle("labour_name")}
                    value={labour_name}
                    placeholder="Labour Name"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mb-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    onChange={onHandle("phone")}
                    placeholder="Phone number"
                    value={phone}
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>
              <div className="mb-6 mr-5">
                <label className=" mb-8 text-lg font-medium text-pink-600">
                  Address
                </label>
                <input
                  type="text"
                  onChange={onHandle("address")}
                  placeholder="Address"
                  value={address}
                  required
                  className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div className="md:flex ">
                <div className="mb-6 mr-5">
                  <div>
                    <label className=" mb-8 text-lg font-medium text-pink-600">
                      Advance
                    </label>
                  </div>

                  <select
                    onChange={onHandle("advance")}
                    value={advance}
                    className="w-full my_dropdown md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 text-black"
                  >
                    <option value="">select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {advance === "yes" ? (
                  <div className="mb-6 mr-5">
                    <label className=" mb-2 text-lg font-medium text-pink-600">
                      Advance amount
                    </label>
                    <input
                      type="number"
                      onChange={onHandle("adv_amt")}
                      value={adv_amt}
                      placeholder="Advance Amount"
                      required
                      className="w-full md:mt-3 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="md:flex">
                <div className="mb-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Salary
                  </label>
                  <input
                    type="number"
                    onChange={onHandle("salary")}
                    placeholder="salary"
                    value={salary}
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div> </div>
              </div>

              <div className="mb-6 mt-10 text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-lg font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:ml-3 sm:w-auto sm:text-lg"
                >
                  Add Labour
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

export default Labour_form;

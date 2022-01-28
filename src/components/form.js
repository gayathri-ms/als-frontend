import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../helper/auth";
import { getAllCompanies, getRate } from "../helper/companyHelper";
import { createForm } from "../helper/formHelper";
import { getAllVehicle } from "../helper/vehicleHelper";

const Form = () => {
  const [values, setValues] = useState({
    vehicle_no: "",
    company: "",
    no_loads: 0,
    rate: 0,
    delivery: "in",
    extras: 0,
    gst: "no",
    gstamt: 0,
  });

  const [vehicles, setVehicles] = useState([]);
  const [companies, setCompanies] = useState([]);

  const { vehicle_no, company, no_loads, rate, delivery, extras, gst, gstamt } =
    values;

  const users = isAuthenticated();
  const [msg, setMsg] = useState("");

  const onHandle = (name) => (e) => {
    console.log("name>>", name);
    if (name === "company") {
      const detail = companies.filter(
        (data) => data.company_name === e.target.value
      );
      console.log("detail", detail);
      setValues({
        ...values,
        company: detail[0].company_name,
        rate: detail[0].rate,
      });
    } else setValues({ ...values, [name]: e.target.value });
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

    getAllCompanies(users.user, users.token)
      .then((data) => {
        if (data.err) {
          setMsg(data.err);
        }
        if (data.length === 0) {
          setMsg("Add Vehicles");
        }
        setCompanies(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log("values", values);
    createForm(values, users.user, users.token).then((data) => {
      if (data.err) {
        setMsg(data.err);
      }
      setValues({
        ...values,
        vehicle_no: "",
        company: "",
        no_loads: 0,
        rate: 0,
        delivery: "in",
        extras: 0,
        gst: "no",
        gstamt: 0,
      });
      setMsg("Added Successfully");
    });
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
              <div className="mb-6 mt-6 mr-5">
                <label className=" mb-8 text-lg font-medium text-pink-600">
                  Company Name
                </label>
                <select
                  onChange={onHandle("company")}
                  value={company}
                  className="w-full ml-5 my_dropdown md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 text-black"
                >
                  <option>Select</option>
                  {companies.map((company, index) => {
                    return (
                      <option key={index}>
                        {company.company_name}
                        {/* {setValues({ ...values, rate: company.rate })} */}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="md:flex">
                <div className="mb-6 mr-5">
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
              <div className="md:flex justify-between">
                <div className="mb-6 mr-5">
                  <div>
                    <label className=" mb-2 text-lg font-medium text-pink-600 ">
                      Delivery
                    </label>
                  </div>
                  <div>
                    <select
                      onChange={onHandle("delivery")}
                      value={delivery}
                      className="w-full my_dropdown md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    >
                      <option value="in">In</option>
                      <option value="out">Out</option>
                    </select>
                  </div>
                </div>
                {delivery === "out" ? (
                  <div className="mb-6 mr-5">
                    <label className=" mb-2 text-lg font-medium text-pink-600">
                      Extras
                    </label>
                    <input
                      type="number"
                      onChange={onHandle("extras")}
                      value={extras}
                      placeholder="Extras"
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
                  <div>
                    <label className=" mb-2 text-lg font-medium text-pink-600">
                      GST
                    </label>
                  </div>

                  <div>
                    <select
                      onChange={onHandle("gst")}
                      value={gst}
                      className="w-full my_dropdown md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
                {gst === "yes" ? (
                  <div className="mb-6 mr-5">
                    <label className="mb-2 text-lg font-medium text-pink-600">
                      GST in %
                    </label>
                    <input
                      type="number"
                      onChange={onHandle("gstamt")}
                      placeholder="gst"
                      value={gstamt}
                      required
                      className="w-full md:mt-3 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="mb-6 mt-10 text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-lg font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:ml-3 sm:w-auto sm:text-lg"
                >
                  Add Company
                </button>
              </div>
            </form>
            <div className="font-medium mt-5 text-center text-2xl text-green-700">
              {msg}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

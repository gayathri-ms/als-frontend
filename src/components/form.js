import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../helper/auth";
import { getAllCompanies, getRate } from "../helper/companyHelper";
import { createForm } from "../helper/formHelper";
import { getAllVehicle } from "../helper/vehicleHelper";

const Form = () => {
  const [values, setValues] = useState({
    vehicle_no: "",
    load_date: "",
    company: "",
    address: "",
    phone_no: "",
    no_loads_in: 0,
    no_loads_out: 0,
    rate: 0,
    extras: 0,
    total_rate_in: 0,
    total_rate_out: 0,
    gst: "no",
    gstamt: 0,
    bill: "-",
    amt_received: 0,
    acc_holder: "",
  });
  const [del_in, setDelIn] = useState("In");
  const [del_out, setDelOut] = useState("Out");
  const [amtRec, setAmtRec] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [companies, setCompanies] = useState([]);

  const {
    vehicle_no,
    load_date,
    company,
    address,
    phone_no,
    no_loads_in,
    no_loads_out,
    rate,
    extras,
    gst,
    gstamt,
    bill,
    total_rate_in,
    total_rate_out,
    amt_received,
    acc_holder,
  } = values;

  const users = isAuthenticated();
  const [msg, setMsg] = useState("");

  const onHandle = (name) => (e) => {
    // console.log("name>>", name);
    if (name === "company") {
      const detail = companies.filter(
        (data) => data.company_name === e.target.value
      );
      // console.log("detail", detail);
      setValues({
        ...values,
        company: detail[0].company_name,
        rate: detail[0].rate,
        address: detail[0].address,
        phone_no: detail[0].phone,
      });
    } else if (name === "no_loads_in") {
      var val = e.target.value * rate;
      setValues({ ...values, [name]: e.target.value, total_rate_in: val });
    } else if (name === "total_rate_in") {
      console.log("");
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
          setMsg("Add Company");
        }
        setCompanies(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log("values", values);
    if (company !== "" && vehicle_no !== "") {
      createForm(values, users.user, users.token).then((data) => {
        if (data.err) {
          setMsg(data.err);
        }
        setValues({
          ...values,
          vehicle_no: "",
          load_date: "",
          company: "",
          address: "",
          phone_no: "",
          no_loads_in: 0,
          no_loads_out: 0,
          rate: 0,
          extras: 0,
          total_rate_in: 0,
          total_rate_out: 0,
          gst: "no",
          gstamt: 0,
          bill: "-",
          amt_received: 0,
          acc_holder: "",
        });
        setAmtRec("");
        setMsg("Added Successfully");
      });
    } else {
      if (company === "") setMsg("Fill the Company Name");
      if (vehicle_no === "") setMsg("Fill the Vehicle Number");
    }
  };

  return (
    <div className="">
      <div className=" mx-auto">
        <div className="max-w-4xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
          <div>
            <form onSubmit={onHandleSubmit}>
              <div className="md:flex border-t-2 border-b-2 border-red-200">
                <div className="mb-6 mt-5 mr-5">
                  <div>
                    <label className=" mb-8 text-lg font-medium text-pink-600">
                      Vehicle No
                    </label>
                  </div>
                  <div>
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
                <div className="mb-6 mt-5 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Load Date
                  </label>
                  <input
                    type="date"
                    onChange={onHandle("load_date")}
                    placeholder="Load Date"
                    value={load_date}
                    required
                    className="md:w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>

              <div className="md:flex">
                <div className="mb-6 mt-6 mr-5 md:w-1/3">
                  <div>
                    <label className=" mb-8 text-lg font-medium text-pink-600">
                      Company Name
                    </label>
                  </div>
                  <div>
                    <select
                      onChange={onHandle("company")}
                      value={company}
                      className="w-full bg-white md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 text-black"
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
                </div>
                <div className="mb-6 mt-6 mr-5 md:w-1/3">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Rate
                  </label>
                  <input
                    type="number"
                    onChange={onHandle("rate")}
                    placeholder="Rate"
                    value={rate}
                    required
                    className="w-full pointer-events-none md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>
              <div className="md:flex justify-between">
                <div className="mb-6 mr-5">
                  <label className=" mb-2 text-lg font-medium text-pink-600 ">
                    Delivery
                  </label>
                  <input
                    type="text"
                    defaultValue={del_in}
                    className="w-full pointer-events-none md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mb-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    No of Loads
                  </label>
                  <input
                    type="number"
                    onChange={onHandle("no_loads_in")}
                    value={no_loads_in}
                    placeholder="no of loads"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mb-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Total In Rate
                  </label>
                  <input
                    type="number"
                    onChange={onHandle("total_rate_in")}
                    // placeholder="Rate"
                    value={total_rate_in}
                    required
                    className="w-full pointer-events-none md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>
              <div className="md:flex justify-between">
                <div className="mb-6 mr-5">
                  <label className=" mb-2 text-lg font-medium text-pink-600 ">
                    Delivery
                  </label>
                  <input
                    type="text"
                    defaultValue={del_out}
                    className="w-full pointer-events-none md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mb-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    No of Loads
                  </label>
                  <input
                    type="number"
                    onChange={onHandle("no_loads_out")}
                    value={no_loads_out}
                    placeholder="no of loads"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mb-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Total Out Rate
                  </label>
                  <input
                    type="number"
                    onChange={onHandle("total_rate_out")}
                    placeholder="Rate"
                    value={total_rate_out}
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>
              <div className="md:flex">
                <div className="mb-6 mr-5 md:w-1/3">
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
              </div>
              <div className="md:flex">
                <div className="mb-6 mr-5 md:w-1/3">
                  <div>
                    <label className=" mb-2 text-lg font-medium text-pink-600">
                      GST
                    </label>
                  </div>

                  <div>
                    <select
                      onChange={onHandle("gst")}
                      value={gst}
                      className="w-full p-2 bg-white max-w-25 md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
                {gst === "yes" ? (
                  <div className="mb-6 mr-5 md:w-1/3">
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
                {gst === "yes" ? (
                  <div className="mb-6 mr-5 md:w-1/3">
                    <label className="mb-2 text-lg font-medium text-pink-600">
                      GST Bill No
                    </label>
                    <input
                      type="text"
                      onChange={onHandle("bill")}
                      placeholder="Bill No"
                      value={bill}
                      required
                      className="w-full md:mt-3 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="md:flex">
                <div className="mb-6 mr-5 md:w-1/3">
                  <div>
                    <label className=" mb-2 text-lg font-medium text-pink-600">
                      Amount Received
                    </label>
                  </div>

                  <div>
                    <select
                      onChange={(e) => setAmtRec(e.target.value)}
                      value={amtRec}
                      className="w-full bg-white md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
                {amtRec === "yes" ? (
                  <div className="mb-6 mr-5 md:w-1/3">
                    <label className="mb-2 text-lg font-medium text-pink-600">
                      Amount
                    </label>
                    <input
                      type="number"
                      onChange={onHandle("amt_received")}
                      placeholder="Amount Received"
                      value={amt_received}
                      required
                      className="w-full md:mt-3 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                  </div>
                ) : (
                  ""
                )}
                {amtRec === "yes" ? (
                  <div className="mb-6 mr-5 md:w-1/3">
                    <label className="mb-2 text-lg font-medium text-pink-600">
                      Account Holder
                    </label>
                    <select
                      onChange={onHandle("acc_holder")}
                      value={acc_holder}
                      className="w-full bg-white md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    >
                      <option value="">Select</option>
                      <option value="Company">Company</option>
                      <option value="Marappan">Marappan</option>
                      <option value="Rasappan">Rasappan</option>
                    </select>
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

export default Form;

import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    vehicle_no: "",
    company: "",
    no_loads: 0,
    rate: 0,
    delivery: "in",
    extras: 0,
    gst: "yes",
    gstamt: 0,
  });

  const { vehicle_no, company, no_loads, rate, delivery, extras, gst, gstamt } =
    values;

  const onHandle = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log("values", values);
    setValues({
      ...values,
      vehicle_no: "",
      company: "",
      no_loads: 0,
      rate: 0,
      delivery: "in",
      extras: 0,
      gst: "yes",
      gstamt: 0,
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
                  <input
                    type="text"
                    placeholder="Vehicle No"
                    onChange={onHandle("vehicle_no")}
                    value={vehicle_no}
                    required
                    className="w-1/2 ml-8 md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>
              <div className="mb-6 mt-6 mr-5">
                <label className=" mb-8 text-lg font-medium text-pink-600">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  onChange={onHandle("company")}
                  value={company}
                  required
                  className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

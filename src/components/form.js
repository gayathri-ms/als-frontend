import React from "react";

const Form = () => {
  return (
    <div className="">
      <div className=" mx-auto">
        <div className="max-w-2xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
          <div>
            <form>
              <div className="md:flex border-t-2 border-b-2 border-red-200">
                <div className="mb-6 mt-5 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Vehicle No
                  </label>
                  <input
                    type="text"
                    placeholder="Vehicle No"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mb-6 mt-5 mr-5 ">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
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
                    placeholder="Rate"
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
                    <select className="w-full my_dropdown md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300">
                      <option value="option 1">In</option>
                      <option value="option 2">Out</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6 mr-5">
                  <label className=" mb-2 text-lg font-medium text-pink-600">
                    Extras
                  </label>
                  <input
                    type="number"
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
                    <select className="w-full my_dropdown md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300">
                      <option value="option 1">Yes</option>
                      <option value="option 2">No</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6 mr-5">
                  <label className="mb-2 text-lg font-medium text-pink-600">
                    GST in %
                  </label>
                  <input
                    type="number"
                    placeholder="gst"
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

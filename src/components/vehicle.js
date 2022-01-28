import React, { useState } from "react";

const Vehicle = () => {
  const [values, setValues] = useState({
    vehicle_no: "",
    place: "",
  });

  const { vehicle_no, place } = values;

  const onHandle = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log("values", values);
    setValues({ ...values, vehicle_no: "", place: "" });
  };

  return (
    <div className="flex ">
      <div className="container mx-auto">
        <div className="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
          <div>
            <form onSubmit={onHandleSubmit}>
              <div className="mb-6 mr-5 w-3/4 mx-12 md:ml-16">
                <label className="block mb-2 text-lg font-medium text-pink-600">
                  Vehicle No
                </label>
                <input
                  type="text"
                  onChange={onHandle("vehicle_no")}
                  placeholder="Vehicle No"
                  value={vehicle_no}
                  required
                  className="w-full px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>

              <div className="mb-6 mr-5 w-3/4 mx-12 md:ml-16">
                <label className="block mb-2 text-lg font-medium text-pink-600">
                  Place
                </label>
                <input
                  type="text"
                  onChange={onHandle("place")}
                  value={place}
                  placeholder="place"
                  required
                  className="w-full px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>

              <div className="mb-6 mt-5 text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-lg font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:ml-3 sm:w-auto sm:text-lg"
                >
                  Add Vehicle
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;

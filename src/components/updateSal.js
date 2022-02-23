import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../helper/auth";
import { getAllLabour, updateSalary } from "../helper/labourHelper";

const UpdateSal = () => {
  const [detail, setDetail] = useState({
    l_id: "",
    labour_name: "",
    salary: 0,
    adv_amt: 0,
  });
  const [labourId, setLabourid] = useState([]);
  const { l_id, labour_name, salary, adv_amt } = detail;
  const [msg, setMsg] = useState("");
  const onHandle = (name) => (e) => {
    if (name === "l_id") {
      const data = labourId.filter((d) => d.l_id === e.target.value);
      setDetail({
        ...detail,
        [name]: e.target.value,
        labour_name: data[0].labour_name,
      });
    } else {
      setDetail({
        ...detail,
        [name]: e.target.value,
      });
    }
  };
  const users = isAuthenticated();
  useEffect(() => {
    getAllLabour(users.user, users.token).then((data) => {
      if (data.err) {
        setMsg(data.err);
      }
      //   console.log("data", data);
      setLabourid(data);
      // console.log(labourId);
    });
  }, []);
  const onHandleChange = (e) => {
    e.preventDefault();
    // console.log("detail", detail);
    updateSalary(detail, users.user, users.token)
      .then((data) => {
        if (data.err) {
          setMsg(data.err);
        } else {
          //   console.log("data", data);
          setMsg("Updated Successfully");
          setDetail({
            l_id: "",
            labour_name: "",
            salary: 0,
            adv_amt: 0,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="">
      <div className="">
        <div className=" mx-auto">
          <div className="max-w-lg p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
            <div>
              <form onSubmit={onHandleChange}>
                <div className="md:flex border-t-2 border-red-200">
                  <div className="mb-6 mr-5 mt-4 md:w-full">
                    <label className=" mb-8 text-lg font-medium text-pink-600">
                      Labour Id
                    </label>

                    <select
                      onChange={onHandle("l_id")}
                      value={l_id}
                      className="w-full bg-white md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 text-black"
                    >
                      <option>Select</option>
                      {labourId.map((lab, index) => {
                        return <option key={index}>{lab.l_id}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="mb-6 mr-5 md:w-full">
                    <label className=" mb-8 text-lg font-medium text-pink-600">
                      Labour Name
                    </label>
                    <input
                      type="text"
                      defaultValue={labour_name}
                      placeholder="Labour Name"
                      required
                      className="w-full md:mt-4 px-3 py-2 pointer-events-none placeholder-gray-900 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                  </div>
                </div>
                <div className="md:flex">
                  <div className="mb-6 mr-5 md:w-full">
                    <label className=" mb-8 text-lg font-medium text-pink-600">
                      Salary
                    </label>

                    <input
                      type="text"
                      onChange={onHandle("salary")}
                      value={salary}
                      placeholder="Salary"
                      required
                      className="w-full md:mt-4 px-3 py-2  placeholder-gray-900 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                  </div>
                </div>
                <div className="md:flex">
                  <div className="mb-6 mr-5 md:w-full">
                    <label className=" mb-8 text-lg font-medium text-pink-600">
                      Advance Amount
                    </label>

                    <input
                      type="number"
                      onChange={onHandle("adv_amt")}
                      value={adv_amt}
                      placeholder="Advance amount"
                      required
                      className="w-full md:mt-4 px-3 py-2  placeholder-gray-900 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                  </div>
                </div>
                <div className="mb-6 mt-10 text-center">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-lg font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:ml-3 sm:w-auto sm:text-lg"
                  >
                    Add
                  </button>
                </div>
              </form>
              <div>
                {msg === "Updated Successfully" ? (
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
    </div>
  );
};

export default UpdateSal;

import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../helper/auth";
import { getAllLabour, updateAdvance } from "../helper/labourHelper";

const UpdateAdv = () => {
  const [detail, setDetail] = useState({
    l_id: "",
    labour_name: "",
    adv_amt: 0,
    advance: "",
  });
  const [labourId, setLabourid] = useState([]);
  // const [advance, setAdvance] = useState("");
  const { l_id, labour_name, advance, adv_amt } = detail;
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
    if (advance !== "") {
      updateAdvance(detail, users.user, users.token)
        .then((data) => {
          if (data.err) {
            setMsg(data.err);
          } else {
            //   console.log("data", data);
            setMsg("Updated Successfully");

            setDetail({
              l_id: "",
              labour_name: "",
              adv_amt: 0,
              advance: "",
            });
          }
        })
        .catch((err) => console.log(err));
    } else setMsg("Choose the advance value");
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
                      Advance
                    </label>
                    <select
                      onChange={onHandle("advance")}
                      value={advance}
                      className="w-full p-2 bg-white max-w-25 md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    >
                      <option value="">Select</option>
                      <option value="yes">
                        Giving Advance Amount to Labour
                      </option>
                      <option value="no">
                        Getting advance amount from labour
                      </option>
                    </select>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="mb-6 mr-5 md:w-full">
                    <label className=" mb-8 text-lg font-medium text-pink-600">
                      Advance Amount
                    </label>

                    <input
                      type="text"
                      onChange={onHandle("adv_amt")}
                      value={adv_amt}
                      placeholder="Advance Amount"
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

export default UpdateAdv;

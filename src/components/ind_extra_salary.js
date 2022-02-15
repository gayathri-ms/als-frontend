import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../helper/auth";
import { getAllLabour } from "../helper/labourHelper";

const Ind_extra_salary = ({ values, setValues, index, laboursArray }) => {
  const [detail, setDetail] = useState({
    l_id: "",
    labour_name: "",
  });
  const [labourId, setLabourid] = useState([]);
  const { l_id, labour_name } = detail;
  const [next, setNext] = useState(false);
  const [msg, setMsg] = useState("");
  const onHandle = (name) => (e) => {
    if (name === "l_id") {
      const data = labourId.filter((d) => d.l_id === e.target.value);
      setDetail({
        ...detail,
        [name]: e.target.value,
        labour_name: data[0].labour_name,
      });
    }
  };
  const users = isAuthenticated();
  useEffect(() => {
    getAllLabour(users.user, users.token).then((data) => {
      if (data.err) {
        setMsg(data.err);
      }
      // console.log("data", data);
      setLabourid(data);
      // console.log(labourId);
    });
  }, []);
  const onHandleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, laboursArray: [...laboursArray, detail] });
    // console.log("larr", laboursArray);
    setNext(!next);
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <select
          onChange={onHandle("l_id")}
          value={l_id}
          className="w-full ml-5 bg-white md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 text-black"
        >
          <option>Select</option>
          {labourId.map((lab, index) => {
            return (
              <option key={index}>
                {lab.l_id}
                {/* {setValues({ ...values, rate: company.rate })} */}
              </option>
            );
          })}
        </select>
      </td>
      <td className="py-4 px-6 text-md text-gray-900 whitespace-nowrap dark:text-gray-400">
        <input
          type="text"
          // onChange={onHandle("labour_name")}
          // value={labour_name}
          defaultValue={labour_name}
          placeholder="Labour Name"
          required
          className="w-full md:mt-4 px-3 py-2 pointer-events-none placeholder-gray-900 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
      </td>
      {next ? (
        <td></td>
      ) : (
        <td className="py-4 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
          <button
            onClick={onHandleChange}
            className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-lg font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:ml-3 sm:w-auto sm:text-lg"
          >
            Add
          </button>
        </td>
      )}
    </tr>
  );
};

export default Ind_extra_salary;

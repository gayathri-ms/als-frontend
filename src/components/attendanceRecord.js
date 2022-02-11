import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../helper/auth";
import { MdOutlineEdit } from "react-icons/md";
import { addAttendance } from "../helper/attendanceHelper";

const A_record = ({ com }) => {
  const [isedit, setIsedit] = useState(false);
  const users = isAuthenticated();
  const [details, setDetails] = useState({
    labour_name: com.labour_name,
    l_id: com.l_id,
    present: "",
    shift_time: "none",
    extras: 0,
  });
  const { labour_name, l_id, present, shift_time, extras } = details;

  const onHandle = (name) => (e) => {
    if (name === "present" && e.target.value === "absent") {
      setDetails({
        ...details,
        present: "absent",
        shift_time: "none",
        extras: 0,
      });
    } else if (name === "shift_time" && e.target.value === "day") {
      setDetails({
        ...details,
        shift_time: "day",
        extras: 0,
      });
    } else setDetails({ ...details, [name]: e.target.value });
  };

  const [msg, setMsg] = useState("");
  const [next, setNext] = useState(false);

  const onSubmit = () => {
    if (isedit) {
      addAttendance(details, users.user, users.token)
        .then((data) => {
          if (data.err) {
            setMsg(data.err);
          }
        })
        .catch((err) => console.log(err));
      setIsedit(!isedit);
      setNext(true);
    } else {
      setIsedit(!isedit);
    }
  };

  return (
    <tr
      // key={index}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {com.l_id}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {com.labour_name}
      </td>
      {next ? (
        <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {present}
        </td>
      ) : (
        <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <select
            onChange={onHandle("present")}
            value={present}
            className={
              (isedit ? " " : "pointer-events-none ") +
              "w-full  bg-gray-100 md:mt-4 px-3 py-2 placeholder-gray-200 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            }
          >
            <option value="">Select</option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>
        </td>
      )}
      {next ? (
        <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {shift_time}
        </td>
      ) : (
        <td className="py-4 px-6  text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {present === "present" ? (
            <select
              onChange={onHandle("shift_time")}
              value={shift_time}
              className={
                (isedit ? " " : "pointer-events-none ") +
                "w-full  bg-gray-100 md:mt-4 px-3 py-2 placeholder-gray-200 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              }
            >
              <option value="">Select</option>
              <option value="day">Day</option>
              <option value="night">Night</option>
            </select>
          ) : (
            <div>{shift_time}</div>
          )}
        </td>
      )}

      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {isedit && shift_time === "night" ? (
          <div>
            <input
              type="number"
              onChange={onHandle("extras")}
              placeholder="extras"
              value={extras}
              required
              className="w-full md:mt-3 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>
        ) : (
          <div>{extras}</div>
        )}
      </td>
      {next ? (
        <td></td>
      ) : (
        <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {isedit ? (
            <button
              onClick={onSubmit}
              className="btn flex  border-2 pr-2 pl-3  py-1  rounded hover:bg-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <div>
                <span className="mr-2 py-1">
                  <MdOutlineEdit />
                </span>
                <span>Done</span>
              </div>
            </button>
          ) : (
            <button
              onClick={onSubmit}
              className="btn flex  border-2 pr-2 pl-3  py-1  rounded hover:bg-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <div>
                <span className="mr-2 py-1">
                  <MdOutlineEdit />
                </span>
                <span>Edit</span>
              </div>
            </button>
          )}
        </td>
      )}
    </tr>
  );
};

export default A_record;

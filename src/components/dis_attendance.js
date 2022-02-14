import React, { useEffect, useState } from "react";
import { getAllAttendance } from "../helper/attendanceHelper";
import { isAuthenticated } from "../helper/auth";
import { getallform } from "../helper/formHelper";

const Dis_attendance = () => {
  const [date, setDate] = useState("");
  const [l_id, setl_id] = useState("");
  const [forms, setForms] = useState([]);
  const [form, setForm] = useState([]);
  const [msg, setMsg] = useState("");

  const users = isAuthenticated();

  useEffect(() => {
    getAllAttendance(users.user, users.token)
      .then((data) => {
        if (data.err) {
          setMsg(data.err);
        }
        // console.log("data", data);
        setForms(data);
        data.sort((a, b) => parseFloat(b.invoice) - parseFloat(a.invoice));
        setForm(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onHandle = (e) => {
    const date = new Date(e.target.value);
    var dateObj = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

    const month = dateObj.getMonth() + 1;
    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();
    const output = day + "-" + month + "-" + year;
    // console.log("output", output);
    const data = forms.filter(
      (c) => c.date !== undefined && c.date.indexOf(output) !== -1
    );
    // console.log("data", data);

    setForm(data);
    setDate(e.target.value);
  };

  const onHandle1 = (e) => {
    const data = forms.filter(
      (c) =>
        c.lab_id !== undefined &&
        c.lab_id.toLowerCase().indexOf(e.target.value) !== -1
    );
    setForm(data);
    setl_id(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="md:flex justify-center">
        <div className="mb-6 mr-5">
          <label className=" mb-8 text-lg font-medium text-pink-600">
            Date
          </label>

          <input
            type="date"
            onChange={onHandle}
            placeholder="dd/mm/yyyy"
            value={date}
            required
            className="w-full mt-5 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
        <div className="mb-6 mr-5">
          <label className=" mb-8 text-lg font-medium text-pink-600">
            Labour ID
          </label>
          <input
            type="text"
            onChange={onHandle1}
            placeholder="labour id"
            value={l_id}
            required
            className="w-full mt-5 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
      </div>

      <div className="text-center mb-5">
        <div className="font-medium mt-5 text-center text-2xl text-red-700">
          {msg}
        </div>
      </div>
      <div>
        <div className="flex flex-col mx-5 text-center">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block py-2 min-w-fit sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow-md sm:rounded-lg">
                <table className="min-w-fit">
                  <thead className="bg-gray-200 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        S.NO
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Labour Name
                      </th>

                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Labour Id
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        present
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        shift_time
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        extras
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {form.map((com, index) => {
                      return (
                        <tr
                          key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.invoice}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-black capitalize whitespace-nowrap dark:text-gray-400">
                            {com.labour}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-black  whitespace-nowrap dark:text-gray-400">
                            {com.lab_id}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-black  whitespace-nowrap dark:text-gray-400">
                            {com.date}
                          </td>

                          <td className="py-4 px-6 text-md  font-medium text-black  whitespace-nowrap dark:text-white">
                            {com.present}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-black  whitespace-nowrap dark:text-white">
                            {com.shift_time}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-black  whitespace-nowrap dark:text-white">
                            {com.extras}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 font-medium text-red-600 text-xl ">
        {form.length === 0 ? "No Details Found" : ""}{" "}
      </div>
    </div>
  );
};

export default Dis_attendance;

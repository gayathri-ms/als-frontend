import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../helper/auth";
import { getallform, updateform } from "../helper/formHelper";
import {
  addIncome,
  getIncome,
  updateIncome,
} from "../helper/monthlyIncomeHelper";

const MonthlyIncome = () => {
  const [month, setMonth] = useState(0);
  const [forms, setForms] = useState([]);
  const [form, setForm] = useState([]);
  const [msg, setMsg] = useState("");

  const month_name = [
    "January",
    "Febraury",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const users = isAuthenticated();

  useEffect(() => {
    getIncome(users.user, users.token)
      .then((data) => {
        if (data.err) {
          setMsg(data.err);
        }

        setForms(data);
        if (data.length)
          data.sort((a, b) => parseFloat(b.invoice) - parseFloat(a.invoice));
        setForm(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const onHandle = (e) => {
    const data = forms.filter((c) => c.month === Number(e.target.value));
    setForm(data);
    setMonth(e.target.value);
  };

  const onHandleSubmit = () => {
    const data = forms.filter((c) => c.month === Number(month));

    if (data.length === 0) {
      // add
      addIncome(month, users.user, users.token)
        .then((data) => {
          if (data.err) setMsg(data.err);
          else {
            setMonth("");
            setTimeout(() => setMsg("Added Successfully"), 5000);
            setMsg("");
          }
        })
        .catch((err) => console.log(err));
    } else {
      //update
      updateIncome(month, users.user, users.token).then((data) => {
        if (data.err) setMsg(data.err);
        else {
          setMonth("");
          setTimeout(() => setMsg("Updated Successfully"), 5000);
          setMsg("");
        }
      });
    }
  };

  return (
    <div className="flex flex-col text-center">
      <form onSubmit={onHandleSubmit}>
        <div className="mb-6 mt-5 mr-5">
          <div>
            <label className=" mb-8 text-lg font-medium text-pink-600">
              Month
            </label>
          </div>
          <div>
            <select
              onChange={onHandle}
              value={month}
              className="w-full my_dropdown md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            >
              <option>Select</option>
              {month_name.map((m_name, index) => {
                return (
                  <option key={index} value={index + 1}>
                    {m_name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="mb-6 mt-10 text-center">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-lg font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:ml-3 sm:w-auto sm:text-lg"
          >
            Check
          </button>
        </div>
      </form>

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
                        Invoice
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Month
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Total Income
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Total GST
                      </th>

                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Spares
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Diesel
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Petrol
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Labour Salary
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Insurance
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        FC
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Expenses
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Total
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
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {month_name[com.month - 1]}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                            {com.totalIncome}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                            {com.totalGst}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.spares}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.diesel}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.petrol}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.labourSalary}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.insurance}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                            {com.fc}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.expenses}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.total}
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

export default MonthlyIncome;

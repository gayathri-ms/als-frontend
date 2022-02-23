import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../helper/auth";
import { addExpenses } from "../helper/expensesHelper";

const Expenses = () => {
  const [values, setValues] = useState({
    reason: "",
    amount: 0,
    date: "",
  });

  const { reason, amount, date } = values;

  const users = isAuthenticated();
  const [msg, setMsg] = useState("");

  const onHandle = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (reason !== "" && amount !== 0) {
      addExpenses(values, users.user, users.token).then((data) => {
        if (data.err) {
          setMsg(data.err);
        }
        setValues({
          ...values,
          reason: "",
          amount: 0,
          date: "",
        });
        setMsg("Added Successfully");
      });
    } else {
      if (reason === "") setMsg("Fill the reason");
      if (amount !== 0) setMsg("Fill the Amount");
    }
  };

  return (
    <div className="">
      <div className=" mx-auto">
        <div className="max-w-2xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
          <div>
            <form onSubmit={onHandleSubmit}>
              <div className="md:flex">
                <div className="mt-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Reason
                  </label>
                  <input
                    type="text"
                    onChange={onHandle("reason")}
                    value={reason}
                    placeholder="Reason"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mt-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Date
                  </label>
                  <input
                    type="date"
                    onChange={onHandle("date")}
                    value={date}
                    placeholder="Date"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>
              <div className="md:flex">
                <div className="mb-6 mt-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Amount
                  </label>
                  <input
                    type="number"
                    onChange={onHandle("amount")}
                    value={amount}
                    placeholder="amount"
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>
              <div className="mb-6 mt-10 text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-lg font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:ml-3 sm:w-auto sm:text-lg"
                >
                  Add Expenses
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

export default Expenses;

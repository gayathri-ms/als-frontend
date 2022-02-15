import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../helper/auth";
import { getallform, updateform } from "../helper/formHelper";
import { frontend } from "./variables";

const Updateamt = () => {
  const [invoice, setInvoice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [acc_holder, setAcc_holder] = useState("");
  const [forms, setForms] = useState([]);
  const [form, setForm] = useState([]);
  const [msg, setMsg] = useState("");

  const [next, setNext] = useState(false);
  const users = isAuthenticated();

  useEffect(() => {
    getallform(users.user, users.token)
      .then((data) => {
        if (data.err) {
          setMsg(data.err);
        }
        setForms(data);
        data.sort((a, b) => parseFloat(b.invoice) - parseFloat(a.invoice));
        setForm(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const onHandle = (e) => {
    const data = forms.filter((c) => c.invoice === Number(e.target.value));
    setForm(data);
    setInvoice(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let detail = forms.filter((data) => data.invoice === Number(invoice));
    setForm(detail);
    console.log(detail);
    if (detail[0].acc_holder) {
      console.log(detail[0].acc_holder);
      setAcc_holder(detail[0].acc_holder);
    }
    setNext(true);
  };
  const onHandleChange = (name) => (e) => {
    if (name === "amount") setAmount(e.target.value);
    else if (name === "acc_holder") setAcc_holder(e.target.value);
  };
  const onSubmit2 = (e) => {
    e.preventDefault();
    if (acc_holder !== "") {
      updateform(invoice, amount, acc_holder, users.user, users.token)
        .then((data) => {
          if (data.err) {
            setMsg(data.err);
          } else {
            setForm([data]);
            setMsg("Updated Successfully");
            setTimeout(() => {
              window.location.reload(false);
              if (isAuthenticated()) {
                window.location.replace(`${frontend}updateamount`);
              }
            }, 6000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setMsg("Choose an Account Holder");
    }
  };

  return (
    <div className="flex flex-col">
      {next ? (
        <form onSubmit={onSubmit2}>
          <div className="w-3/4 md:w-80 flex flex-col mx-auto">
            <div>
              <label className=" text-xl font-medium text-pink-600">
                Amount Received
              </label>
              <input
                type="number"
                onChange={onHandleChange("amount")}
                placeholder="amount received"
                value={amount}
                required
                className="w-full mt-5 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            {form[0].acc_holder !== "" ? (
              ""
            ) : (
              <div>
                <label className=" text-xl font-medium text-pink-600">
                  Account Holder
                </label>

                <select
                  onChange={onHandleChange("acc_holder")}
                  value={acc_holder}
                  className="w-full my_dropdown md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                >
                  <option value="">Select</option>
                  <option value="Company">Company</option>
                  <option value="Marappan">Marappan</option>
                  <option value="Rasappan">Rasappan</option>
                </select>
              </div>
            )}

            {/* <div> {invoice} </div> */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex mx-auto mt-5 mb-8 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-lg font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:ml-3 sm:w-auto sm:text-lg"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form onSubmit={onSubmit}>
          <div className="w-3/4 md:w-80 flex flex-col mx-auto">
            <label className=" text-xl font-medium text-pink-600">
              Invoice
            </label>
            <input
              type="number"
              onChange={onHandle}
              placeholder="Invoice"
              value={invoice}
              required
              className="w-full mt-5 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
            {/* <div> {invoice} </div> */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex mx-auto mt-5 mb-8 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-lg font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:ml-3 sm:w-auto sm:text-lg"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="text-center mb-5">
        {msg === "Updated Successfully" ? (
          <div className="font-medium mt-5 text-center text-2xl text-green-700">
            {msg}
          </div>
        ) : (
          <div className="font-medium mt-5 text-center text-2xl text-red-700">
            {msg}
          </div>
        )}{" "}
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
                        Date
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Vehicle No
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Company Name
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Rate
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Number of Loads
                      </th>

                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Amount Received
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Balance
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Account Holder
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
                          <td className="py-4 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {com.dateformat}
                          </td>
                          <td className="py-4 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {com.vehicle_no}
                          </td>
                          <td className="py-4 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {com.company}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.rate}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.no_loads}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.grandtotal}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.amt_received}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.balance}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.acc_holder}
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

export default Updateamt;

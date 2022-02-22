import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../helper/auth";
import { getallform, updateform } from "../helper/formHelper";

const Dis_inv = () => {
  const [invoice, setInvoice] = useState(0);
  const [forms, setForms] = useState([]);
  const [form, setForm] = useState([]);
  const [msg, setMsg] = useState("");

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

  return (
    <div className="flex flex-col">
      <form>
        <div className="w-3/4 md:w-80 flex flex-col mx-auto">
          <label className=" text-xl font-medium text-pink-600">Invoice</label>
          <input
            type="number"
            onChange={onHandle}
            placeholder="Invoice"
            value={invoice}
            required
            className="w-full mt-5 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
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
                        Company/Individual Name
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Load Date
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
                        Number of Loads - In
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Number of Loads - Out
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        GST Amount
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
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                            {com.dateformat}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                            {com.vehicle_no}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                            {com.company}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.load_date}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.rate}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.no_loads_in}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.no_loads_out}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.totalGst}
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

export default Dis_inv;

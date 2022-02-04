import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../helper/auth";
import { duedate } from "../helper/formHelper";

const Home = () => {
  const [details, setDetails] = useState([]);
  const [msg, setMsg] = useState("");
  const users = isAuthenticated();
  useEffect(() => {
    duedate(users.user, users.token).then((data) => {
      if (data.err) {
        setMsg(data.err);
      }
      // if (data.length === 0) setMsg("No Dues");
      console.log("details>>", data);
      setDetails(data);
    });
  }, []);
  return (
    <div className="">
      {isAuthenticated() ? (
        <div>
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
                        {details.map((com, index) => {
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
          {details.length === 0 ? (
            <div className="text-xl font-medium text-center text-green-600 mt-5">
              No Dues Found
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="text-center">
          <div>
            <p>You are not signed in</p>
          </div>
          <div>
            <button className="mt-8 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-lg font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-lg">
              <Link to="/login">Signin</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

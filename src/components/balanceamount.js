import React, { useEffect, useState } from "react";
import { amountbyamount, totalamount } from "../helper/formHelper";
import { isAuthenticated } from "../helper/auth";

const Balanceamount = () => {
  const [total, setTotal] = useState(0);
  const [details, setDetails] = useState([]);
  const [msg, setMsg] = useState("");
  const users = isAuthenticated();

  useEffect(() => {
    totalamount(users.user, users.token)
      .then((data) => {
        if (data.error) {
          setMsg(data.error);
        } else setTotal(data.total);
      })
      .catch((err) => console.log("error", err));

    amountbyamount(users.user, users.token).then((data) => {
      if (data.err) {
        setMsg(data.err);
      } else setDetails(data);
    });
  }, []);
  return (
    <div className="text-center">
      <div className="text-2xl font-bold mb-10 text-red-700">
        Total : {total}{" "}
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
                        Company / Individual Name
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Balance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {details.map((com, index) => {
                      return (
                        <tr
                          key={index}
                          className={
                            com.balance === 0
                              ? "bg-green-500 border-b border-gray-400  dark:bg-gray-800 dark:border-gray-700"
                              : "bg-white border-b border-gray-400 dark:bg-gray-400 dark:border-gray-700"
                          }
                        >
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com._id.company}
                          </td>
                          <td className="py-4 px-6 text-md font-bold text-gray-700 whitespace-nowrap dark:text-gray-400">
                            {com.balance}
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
    </div>
  );
};

export default Balanceamount;

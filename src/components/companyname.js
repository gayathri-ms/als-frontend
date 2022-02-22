import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../helper/auth";
import { getAllCompanies } from "../helper/companyHelper";

const Companyname = () => {
  const [companyname, setCompanyname] = useState("");
  const [msg, setMsg] = useState("");
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState([]);
  const users = isAuthenticated();

  useEffect(() => {
    getAllCompanies(users.user, users.token)
      .then((data) => {
        if (data.err) {
          setMsg(data.err);
        }
        if (data.length === 0) {
          setMsg("No Details Found");
        }
        setCompanies(data);
        setCompany(data);
        console.log(companies);
      })
      .catch((err) => console.log(err));
  }, []);

  const onHandle = (e) => {
    const comp = companies.filter(
      (c) => c.company_name.toLowerCase().indexOf(e.target.value) !== -1
    );
    setCompany(comp);
    setCompanyname(e.target.value);
  };
  return (
    <div className="flex flex-col ">
      <div className="w-3/4 mb-8 md:w-80 flex flex-col mx-auto">
        <label className=" text-xl font-medium text-pink-600">
          Company Name
        </label>
        <input
          type="text"
          onChange={onHandle}
          placeholder="Company Name"
          value={companyname}
          required
          className="w-full mt-5 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
      </div>
      {/* <div className="text-center my-5">{companyname} </div> */}
      <div>
        <div className="flex flex-col mx-5 text-center">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block py-2 min-w-fit sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow-md sm:rounded-lg">
                <table className="min-w-fit">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
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
                        Phone Number
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
                        Fixed Date
                      </th>
                      {/* <th scope="col" className="relative py-3 px-6">
                        <span className="sr-only">Edit</span>
                      </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {company.map((com, index) => {
                      return (
                        <tr
                          key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <td className="py-4 px-6 text-lg font-bold capitalize text-gray-900 whitespace-nowrap dark:text-gray-400">
                            {com.company_name}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {com.phone}
                          </td>
                          <td className="py-4 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {com.rate}
                          </td>
                          <td className="py-4 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {com.fixed_date}
                          </td>
                        </tr>
                      );
                    })}
                    {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        Sliver
                      </td> */}
                    {/* <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        Laptop
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        $2999
                      </td> */}
                    {/* <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                        >
                          Edit
                        </a>
                      </td> */}
                    {/* </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 font-medium text-red-600 text-xl ">
        {company.length === 0 ? "No Details Found" : ""}{" "}
      </div>
    </div>
  );
};

export default Companyname;

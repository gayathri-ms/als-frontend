import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../helper/auth";
import { getallform, updateform } from "../helper/formHelper";
import { getAllDiesel } from "../helper/dieselHelper";

const Dis_diesel = () => {
  const [date, setDate] = useState("");
  const [forms, setForms] = useState([]);
  const [form, setForm] = useState([]);
  const [msg, setMsg] = useState("");

  const users = isAuthenticated();

  useEffect(() => {
    getAllDiesel(users.user, users.token)
      .then((data) => {
        if (data.err) {
          setMsg(data.err);
        }
        // console.log(data);
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
    console.log("date", output);
    const data = forms.filter(
      (c) => c.dateFormat !== undefined && c.dateFormat.indexOf(output) !== -1
    );
    console.log("data", data);

    setForm(data);
    setDate(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <form>
        <div className="w-3/4 md:w-80 flex flex-col mx-auto">
          <label className=" text-xl font-medium text-pink-600">Date</label>
          <input
            type="date"
            onChange={onHandle}
            placeholder="dd/mm/yyyy"
            value={date}
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
                        Rate
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Vehicle number
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Number of ltrs
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
                        Present Km
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        KM per ltr
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {form.map((diesel, index) => {
                      return (
                        <tr
                          key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {diesel.invoice}
                          </td>

                          <td className="py-4 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {diesel.dateFormat}
                          </td>
                          <td className="py-4 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {diesel.rate}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {diesel.vehicle_no}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {diesel.no_ltrs}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {diesel.total_amt}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {diesel.present_km}
                          </td>
                          <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {diesel.kmpl}
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

export default Dis_diesel;

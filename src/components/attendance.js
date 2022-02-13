import React, { useState, useEffect } from "react";
import { getByDate } from "../helper/attendanceHelper";
import { isAuthenticated } from "../helper/auth";
import { getAllLabour } from "../helper/labourHelper";
import A_record from "./attendanceRecord";

const Attendance = () => {
  //   const [company, setCompany] = useState("");
  const [forms, setForms] = useState([]);
  const [form, setForm] = useState([]);
  const [msg, setMsg] = useState("");

  const [isEdit, setIsedit] = useState(false);

  const users = isAuthenticated();

  useEffect(() => {
    getAllLabour(users.user, users.token)
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

  return (
    <div className="flex flex-col">
      <div>
        <div className="flex flex-col mx-5 text-center">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block py-2 min-w-fit sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow-md sm:rounded-lg">
                <table className="min-w-fit">
                  <thead className="bg-gray-200  dark:bg-gray-700">
                    <tr>
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
                        Labour Name
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Absent/Present
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Shift
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Extras
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {form.map((com, index) => {
                      return <A_record com={com} setMsg={setMsg} key={index} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xl text-red-500 font-medium text-center">{msg}</div>

      <div className="text-center mt-8 font-medium text-red-600 text-xl ">
        {form.length === 0 ? "No Details Found" : ""}{" "}
      </div>
    </div>
  );
};

export default Attendance;

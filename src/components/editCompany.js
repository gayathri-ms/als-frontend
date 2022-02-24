import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../helper/auth";
import { editCompany, getAllCompanies } from "../helper/companyHelper";

const EditCompany = () => {
  const [values, setValues] = useState({
    company_name: "",
    rate: "",
    fixed_date: "",
  });

  const { company_name, rate, fixed_date } = values;
  const [fixed, setFixed] = useState(new Date());
  const [msg, setMsg] = useState("");
  const onHandle = (name) => (e) => {
    if (name === "company_name") {
      const data = companies.filter((d) => d.company_name === e.target.value);
      setValues({
        ...values,
        company_name: e.target.value,
        rate: data[0].rate,
        fixed_date: data[0].fixed_date,
      });
    } else if (name === "fixed_date") {
      //   const date = new Date(e.target.value);
      //   var dateObj = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

      //   const month = dateObj.getMonth() + 1;
      //   const day = String(dateObj.getDate()).padStart(2, "0");
      //   const year = dateObj.getFullYear();
      //   const output = day + "-" + month + "-" + year;

      setValues({ ...values, fixed_date: e.target.value });
    } else setValues({ ...values, [name]: e.target.value });
  };
  const users = isAuthenticated();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getAllCompanies(users.user, users.token)
      .then((data) => {
        if (data.err) {
          setMsg(data.err);
        }
        if (data.length === 0) {
          setMsg("Add Company");
        }
        setCompanies(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log("value", values);
    editCompany(values, users.user, users.token)
      .then((data) => {
        if (data.err) {
          setMsg(data.err);
        }
        setMsg("Added Successfully");
        setValues({
          ...values,
          company_name: "",
          rate: "",
          fixed_date: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="max-w-2xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
          <div>
            <form onSubmit={onHandleSubmit}>
              <div className="md:flex">
                <div className="mb-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Company Name
                  </label>
                  <select
                    onChange={onHandle("company_name")}
                    value={company_name}
                    className="w-full bg-white md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 text-black"
                  >
                    <option>Select</option>
                    {companies.map((company, index) => {
                      return (
                        <option key={index}>
                          {company.company_name}
                          {/* {setValues({ ...values, rate: company.rate })} */}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-6 mr-5 ">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Fixed Date
                  </label>
                  <input
                    type="text"
                    onChange={onHandle("fixed_date")}
                    value={fixed_date}
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-red-300 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                  <p className="text-red-700">Format - "DD-MM-YYYY"</p>
                </div>
              </div>
              <div className="md:flex">
                <div className="mb-6 mr-5">
                  <label className=" mb-8 text-lg font-medium text-pink-600">
                    Rate
                  </label>
                  <input
                    type="number"
                    placeholder="Rate"
                    onChange={onHandle("rate")}
                    value={rate}
                    required
                    className="w-full md:mt-4 px-3 py-2 placeholder-black border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>

              <div className="mb-6 mt-10 text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-lg font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:ml-3 sm:w-auto sm:text-lg"
                >
                  Edit Company
                </button>
              </div>
            </form>
            <div className="font-medium mt-5 text-center text-2xl text-green-700">
              {msg}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCompany;

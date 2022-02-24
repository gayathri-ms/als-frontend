import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../helper/auth";
import { getAllCompanies } from "../helper/companyHelper";
import { editform } from "../helper/formHelper";
import { getAllVehicle } from "../helper/vehicleHelper";

const EditAmt = (data) => {
  //   console.log("com", data.data);
  const [com, setCom] = useState(data.data);

  const [values, setValues] = useState({
    invoice: com.invoice,
    vehicle_no: com.vehicle_no,
    load_date: com.load_date,
    month: com.month,
    company: com.company,
    address: com.address,
    phone_no: com.phone_no,
    no_loads_in: com.no_loads_in,
    no_loads_out: com.no_loads_out,
    rate: com.rate,
    extras: com.extras,
    gst: com.gst,
    gstamt: com.gstamt,
    bill: com.bill,
    total_rate_in: com.total_rate_in,
    total_rate_out: com.total_rate_out,
    total: com.total,
    grandtotal: com.grandtotal,
    amt_received: com.amt_received,
    balance: com.balance,
    acc_holder: com.acc_holder,
  });

  const {
    vehicle_no,
    load_date,
    company,
    address,
    phone_no,
    no_loads_in,
    no_loads_out,
    rate,
    extras,
    gst,
    gstamt,
    bill,
    total_rate_in,
    total_rate_out,
    total,
    grandtotal,
    balance,
    amt_received,
    acc_holder,
  } = values;
  const [gtotal, setGtotal] = useState(grandtotal);
  const users = isAuthenticated();
  const [vehicles, setVehicles] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getAllVehicle(users.user, users.token)
      .then((data) => {
        if (data.err) {
          setMsg(data.err);
        }
        if (data.length === 0) {
          setMsg("Add Vehicles");
        }
        setVehicles(data);
      })
      .catch((err) => console.log(err));

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

  const onHandle = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
    // console.log(values);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (gtotal > grandtotal) {
      setGtotal(gtotal - grandtotal);
    } else setGtotal(grandtotal - gtotal);
    editform(values, gtotal, users.user, users.token).then((data) => {
      if (data.error) setMsg(data.error);
      else {
        setEdit(!edit);
        window.location.reload(true);
      }
    });
  };

  const [edit, setEdit] = useState(false);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {com.invoice}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
        {com.load_date}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
        {edit ? (
          <select
            onChange={onHandle("vehicle_no")}
            value={vehicle_no}
            className="w-full bg-white p-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          >
            <option>Select</option>
            {vehicles.map((vehicle, index) => {
              return (
                <option key={index} value={vehicle.vehicle_no}>
                  {vehicle.vehicle_no}
                </option>
              );
            })}
          </select>
        ) : (
          com.vehicle_no
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
        {edit ? (
          <select
            onChange={onHandle("company")}
            value={company}
            className="w-full bg-white p-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 text-black"
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
        ) : (
          com.company
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
        {edit ? (
          <input
            type="text"
            onChange={onHandle("address")}
            className="bg-white w-full border-2 p-1 rounded-md "
            value={address}
          />
        ) : (
          com.address
        )}
      </td>
      <td className="py-4 px-6  text-left text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
        {edit ? (
          <input
            type="text"
            onChange={onHandle("phone_no")}
            className="bg-white max-w-24 border-2 p-1 rounded-md "
            value={phone_no}
          />
        ) : (
          com.phone_no
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {edit ? (
          <input
            type="number"
            onChange={onHandle("rate")}
            className="bg-white w-20 border-2 p-1 rounded-md "
            value={rate}
          />
        ) : (
          com.rate
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {edit ? (
          <input
            type="number"
            onChange={onHandle("no_loads_in")}
            className="bg-white w-full border-2 p-1 rounded-md "
            value={no_loads_in}
          />
        ) : (
          com.no_loads_in
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {edit ? (
          <input
            type="number"
            onChange={onHandle("no_load_out")}
            className="bg-white w-full border-2 p-1 rounded-md "
            value={no_loads_out}
          />
        ) : (
          com.no_loads_out
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
        {edit ? (
          <input
            type="number"
            onChange={onHandle("extras")}
            className="bg-white w-full border-2 p-1 rounded-md "
            value={extras}
          />
        ) : (
          com.extras
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
        {edit ? (
          <select
            onChange={onHandle("gst")}
            value={gst}
            className="min-w-15 p-2 bg-white max-w-25 md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        ) : (
          com.gst
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
        {edit ? (
          <input
            type="number"
            onChange={onHandle("gstamt")}
            className="bg-white w-full border-2 p-1 rounded-md "
            value={gstamt}
          />
        ) : (
          com.gstamt
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
        {edit ? (
          <input
            type="text"
            onChange={onHandle("bill")}
            className="bg-white w-full border-2 p-1 rounded-md "
            value={bill}
          />
        ) : (
          com.bill
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
        {edit ? (
          <input
            type="number"
            onChange={onHandle("total_rate_in")}
            className="bg-white w-full border-2 p-1 rounded-md "
            value={total_rate_in}
          />
        ) : (
          com.total_rate_in
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
        {edit ? (
          <input
            type="number"
            onChange={onHandle("total_rate_out")}
            className="bg-white w-full border-2 p-1 rounded-md "
            value={total_rate_out}
          />
        ) : (
          com.total_rate_out
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
        {edit ? (
          <input
            type="number"
            onChange={onHandle("total")}
            className="bg-white w-full border-2 p-1 rounded-md "
            value={total}
          />
        ) : (
          com.total
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {edit ? (
          <input
            type="number"
            onChange={onHandle("grandtotal")}
            className="bg-white w-full border-2 p-1 rounded-md "
            value={grandtotal}
          />
        ) : (
          com.grandtotal
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {edit ? (
          <input
            type="number"
            onChange={onHandle("amt_received")}
            className="bg-white w-full px-2 border-2 p-1 rounded-md "
            value={amt_received}
          />
        ) : (
          com.amt_received
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {edit ? (
          <input
            type="number"
            onChange={onHandle("balance")}
            className="bg-white w-full px-2 border-2 p-1 rounded-md "
            value={balance}
          />
        ) : (
          com.balance
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {edit ? (
          <input
            type="text"
            onChange={onHandle("acc_holder")}
            className="bg-white w-full px-2 border-2 p-1 rounded-md "
            value={acc_holder}
          />
        ) : (
          com.acc_holder
        )}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {edit ? (
          <button
            onClick={onSubmit}
            className="btn border-2 bd-white p-2 rounded-md "
          >
            Done
          </button>
        ) : (
          <button
            onClick={() => setEdit(!edit)}
            className="btn border-2 bd-white p-2 rounded-md "
          >
            Edit
          </button>
        )}
      </td>
    </tr>
  );
};

export default EditAmt;

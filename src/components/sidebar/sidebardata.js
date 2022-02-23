import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as GrIcons from "react-icons/gr";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as HiIcons from "react-icons/hi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Signin",
    path: "/",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Signin",
        path: "/login",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "signup",
        path: "/signup",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "Form",
    path: "/",
    icon: <MdIcons.MdLibraryAdd />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Old User Form",
        path: "/form",
        icon: <MdIcons.MdAddchart />,
        cName: "sub-nav",
      },
      {
        title: "New user form",
        path: "/individual_form",
        icon: <MdIcons.MdPersonAddAlt1 />,
        cName: "sub-nav",
      },
      {
        title: "Add Company",
        path: "/company",
        icon: <GiIcons.GiFactory />,
        cName: "sub-nav",
      },
      {
        title: "Add Vehicle",
        path: "/vehicle",
        icon: <RiIcons.RiTruckLine />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Contact Details",
    path: "/",
    icon: <RiIcons.RiContactsFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Phone Number",
        path: "/phoneno",
        icon: <BsIcons.BsFillTelephoneFill />,
        cName: "sub-nav",
      },
      {
        title: "Company Name",
        path: "/companyname",
        icon: <GiIcons.GiFactory />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Update Amount",
    path: "/updateamount",
    icon: <FaIcons.FaEdit />,
  },
  {
    title: "Display Details",
    path: "/",
    icon: <BiIcons.BiDetail />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Invoice",
        path: "/display_invoice",
        icon: <ImIcons.ImListNumbered />,
        cName: "sub-nav",
      },
      {
        title: "Company Name",
        path: "/display_comp",
        icon: <GiIcons.GiFactory />,
        cName: "sub-nav",
      },
      {
        title: "Date",
        path: "/display_date",
        icon: <BsIcons.BsCalendarDate />,
        cName: "sub-nav",
      },
      {
        title: "Vehicle Number",
        path: "/display_vehicle_no",
        icon: <RiIcons.RiTruckLine />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Balance Details",
    path: "/balanceamount",
    icon: <HiIcons.HiCurrencyRupee />,
  },

  {
    title: "Maintanence",
    path: "/",
    icon: <GiIcons.GiSpanner />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Expenses",
        path: "/expenses",
        icon: <HiIcons.HiCurrencyRupee />,
        cName: "sub-nav",
      },
      {
        title: "Spares",
        path: "/spareform",
        icon: <BsIcons.BsTools />,
        cName: "sub-nav",
      },

      {
        title: "Diesel Form",
        path: "/dieselform",
        icon: <FaIcons.FaGasPump />,
        cName: "sub-nav",
      },
      {
        title: "Petrol Form",
        path: "/petrolform",
        icon: <GiIcons.GiGasPump />,
        cName: "sub-nav",
      },
      {
        title: "Insurance",
        path: "/insurance_form",
        icon: <FaIcons.FaShieldAlt />,
        cName: "sub-nav",
      },
      {
        title: "FC Details",
        path: "/fc_form",
        cName: "sub-nav",
        icon: <GiIcons.GiWindpump />,
      },
    ],
  },
  {
    title: "Display Maintanence",
    path: "/",
    icon: <BiIcons.BiDetail />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Display Expenses",
        path: "/display_expenses",
        icon: <HiIcons.HiCurrencyRupee />,
        cName: "sub-nav",
      },
      {
        title: "Display Spares",
        path: "/display_spare",
        icon: <BsIcons.BsTools />,
        cName: "sub-nav",
      },
      {
        title: "Display Diesel Details",
        path: "/display_diesel",
        icon: <FaIcons.FaGasPump />,
        cName: "sub-nav",
      },
      {
        title: "Display Petrol Details",
        path: "/display_petrol",
        icon: <GiIcons.GiGasPump />,
        cName: "sub-nav",
      },
      {
        title: "Display Insurance Details",
        path: "/display_insurance",
        icon: <FaIcons.FaShieldAlt />,
        cName: "sub-nav",
      },
      {
        title: "Display FC Details",
        path: "/display_fc",
        icon: <GiIcons.GiWindpump />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Labour",
    path: "/",
    icon: <BsIcons.BsPeopleFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Labour",
        path: "/labour_form",
        icon: <BsIcons.BsFillPersonPlusFill />,
        cName: "sub-nav",
      },
      {
        title: "Attendance",
        path: "/attendance",
        icon: <FaIcons.FaRegCalendarCheck />,
        cName: "sub-nav",
      },
      {
        title: "Extras",
        path: "/extrasalary",
        icon: <RiIcons.RiPriceTag2Line />,
        cName: "sub-nav",
      },
      {
        title: "Update Salary",
        path: "/updatesalary",
        icon: <HiIcons.HiCurrencyRupee />,
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "Display Labour",
    path: "/",
    icon: <BiIcons.BiDetail />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Labour",
        path: "/display_labour",
        icon: <BsIcons.BsPeopleFill />,
        cName: "sub-nav",
      },
      {
        title: "Attendance - Datewise",
        path: "/display_attendance",
        icon: <FaIcons.FaRegCalendarCheck />,
        cName: "sub-nav",
      },
      {
        title: "Labour Salary",
        path: "/monthlysalary",
        icon: <HiIcons.HiCurrencyRupee />,
        cName: "sub-nav",
      },
    ],
  },
  //   {
  //     title: "Messages",
  //     path: "/messages",
  //     icon: <FaIcons.FaEnvelopeOpenText />,

  //     iconClosed: <RiIcons.RiArrowDownSFill />,
  //     iconOpened: <RiIcons.RiArrowUpSFill />,

  //     subNav: [
  //       {
  //         title: "Message 1",
  //         path: "/messages/message1",
  //         icon: <IoIcons.IoIosPaper />,
  //       },
  //       {
  //         title: "Message 2",
  //         path: "/messages/message2",
  //         icon: <IoIcons.IoIosPaper />,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Support",
  //     path: "/support",
  //     icon: <IoIcons.IoMdHelpCircle />,
  //   },
];

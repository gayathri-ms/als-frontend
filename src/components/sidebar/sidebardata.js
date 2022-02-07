import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

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
      //   {
      //     title: "Reports 3",
      //     path: "/reports/reports3",
      //     icon: <IoIcons.IoIosPaper />,
      //   },
    ],
  },
  {
    title: "Company",
    path: "/company",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Vehicle",
    path: "/vehicle",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Form",
    path: "/",
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Company",
        path: "/form",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Individual Name",
        path: "/individual_form",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Contact Details",
    path: "/",
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Phone Number",
        path: "/phoneno",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Company Name",
        path: "/companyname",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Update Amount",
    path: "/updateamount",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Display Details",
    path: "/",
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Invoice",
        path: "/display_invoice",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Company Name",
        path: "/display_comp",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Date",
        path: "/display_date",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Vehicle Number",
        path: "/display_vehicle_no",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Balance Details",
    path: "/balanceamount",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Spares",
    path: "/spareform",
    icon: <IoIcons.IoMdPeople />,
  },

  {
    title: "Diesel Form",
    path: "/dieselform",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Two Wheeler",
    path: "/petrolform",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Display Maintanence",
    path: "/",
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Display Spares",
        path: "/display_spare",
        icon: <IoIcons.IoMdPeople />,
        cName: "sub-nav",
      },
      {
        title: "Display Diesel Details",
        path: "/display_diesel",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Display Petrol Details",
        path: "/display_petrol",
        icon: <IoIcons.IoIosPaper />,
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

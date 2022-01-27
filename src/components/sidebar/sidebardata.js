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
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: "Users",
    //     path: "/overview/users",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    //   {
    //     title: "Revenue",
    //     path: "/overview/revenue",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    // ],
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

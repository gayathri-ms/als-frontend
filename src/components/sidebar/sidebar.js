import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebardata";
import SubMenu from "./submenu";
import { IconContext } from "react-icons/lib";
import { isAuthenticated, signout } from "../../helper/auth";
import { frontend } from "../variables";

const Nav = styled.div`
  height: 80px;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  height: 80px;
`;

const SidebarNav = styled.nav`
  width: 250px;
  box-shadow: 0px 3px 6px 3px #bd86ac, 0px 3px 6px 3px #e6b8d8;
  position: absolute;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const users = isAuthenticated();

  const showSidebar = () => setSidebar(!sidebar);
  const performRedirect = () => {
    window.location.reload(false);
    window.location.replace(`${frontend}`);
  };
  const handleChange = () => {
    signout(() => performRedirect());
  };

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <Nav className="bg-gray-100 fixed top-0 left-0 right-0 w-full flex justify-start items-center">
          <NavIcon className="flex justify-start text-4xl items-center" to="#">
            <FaIcons.FaBars className="my_sticky" onClick={showSidebar} />
            {isAuthenticated() ? (
              <button
                onClick={handleChange}
                className="fixed top-4 right-10 text-xl border-2 p-2 rounded-md border-transparent shadow-sm px-4 py-2 bg-pink-500 text-lg font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:ml-3 sm:w-auto sm:text-lg"
              >
                Logout
              </button>
            ) : (
              ""
            )}
          </NavIcon>
        </Nav>

        <SidebarNav
          className="bg-rose-300 py-10 relative min-h-full h-fit flex justify-center text-fuchsia-900"
          sidebar={sidebar}
        >
          <SidebarWrap>
            {sidebar ? (
              <NavIcon
                className="flex justify-end -mt-5 fixed left-44 top-3 text-2xl items-center"
                to="#"
              >
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
            ) : (
              ""
            )}
            {SidebarData.map((item, index) => {
              return (
                <div key={index}>
                  {((item.title === "Company" ||
                    item.title === "Vehicle" ||
                    item.title === "Form" ||
                    item.title === "Contact Details" ||
                    item.title === "Update Amount" ||
                    item.title === "Display Details" ||
                    item.title === "Balance Details" ||
                    item.title === "Spares" ||
                    item.title === "Diesel Form" ||
                    item.title === "Two Wheeler" ||
                    item.title === "Insurance" ||
                    item.title === "FC Details" ||
                    item.title === "Labour" ||
                    item.title === "Display Labour" ||
                    item.title === "Attendance" ||
                    item.title === "Extras" ||
                    item.title === "Display Maintanence") &&
                    isAuthenticated()) ||
                  item.title === "Home" ? (
                    <SubMenu item={item} />
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;

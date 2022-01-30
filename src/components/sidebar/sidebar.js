import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebardata";
import SubMenu from "./submenu";
import { IconContext } from "react-icons/lib";
import { isAuthenticated } from "../../helper/auth";

const Nav = styled.div`
  height: 80px;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  height: 80px;
`;

const SidebarNav = styled.nav`
  width: 250px;
  height: 100vh;
  box-shadow: 0px 3px 6px 3px #bd86ac, 0px 3px 6px 3px #e6b8d8;
  position: fixed;
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

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <Nav className="bg-white flex justify-start items-center">
          <NavIcon className="flex justify-start text-4xl items-center" to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav
          className="bg-rose-300 flex justify-center text-fuchsia-900"
          sidebar={sidebar}
        >
          <SidebarWrap>
            <NavIcon
              className="flex justify-start text-4xl items-center"
              to="#"
            >
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return (
                <div key={index}>
                  {((item.title === "Company" ||
                    item.title === "Vehicle" ||
                    item.title === "Form" ||
                    item.title === "Contact Details" ||
                    item.title === "Update Amount" ||
                    item.title === "Display Details") &&
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

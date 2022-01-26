import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";

import { FaList, FaHeart, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { Link } from "react-router-dom";

import "react-pro-sidebar/dist/css/styles.css";
import "./header.css";
import Signin from "./signin";
import Signup from "./signup";

const Header = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const [home, setHome] = useState("");

  const onHandle = (name) => (e) => {
    console.log("name", name);
    setHome(name);
  };
  const [next, setNext] = useState(false);
  return (
    <>
      <div id="header">
        <ProSidebar
          // image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22f499f6-422d-40fe-b8b2-22ddf89636f2/darjnr7-c8c951b8-ac39-4ebb-9984-c0556e8be7a4.jpg/v1/fill/w_1024,h_1366,q_75,strp/mitsuha_miyamizu__from_kimi_no_na_wa__by_sprimz_darjnr7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2NiIsInBhdGgiOiJcL2ZcLzIyZjQ5OWY2LTQyMmQtNDBmZS1iOGIyLTIyZGRmODk2MzZmMlwvZGFyam5yNy1jOGM5NTFiOC1hYzM5LTRlYmItOTk4NC1jMDU1NmU4YmU3YTQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Yxyw51MgcEa4yhBaB4MPawnnT9favVz_UlAgEydRykU"
          collapsed={menuCollapse}
        >
          <SidebarHeader>
            <div className="logotext">
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                active={home === "home" ? true : false}
                icon={<AiFillHome />}
                onClick={onHandle("home")}
              >
                Home
              </MenuItem>
              <SubMenu title="Components" icon={<FaHeart />}>
                <MenuItem
                  active={home === "Component1" ? true : false}
                  onClick={onHandle("Component1")}
                >
                  Component 1
                </MenuItem>
                <MenuItem
                  active={home === "Component2" ? true : false}
                  onClick={onHandle("Component2")}
                >
                  Component 2
                </MenuItem>
              </SubMenu>
              <MenuItem
                active={home === "Favourite" ? true : false}
                icon={<FaHeart />}
                onClick={onHandle("Favourite")}
              >
                Favourite
              </MenuItem>
              <MenuItem
                active={home === "Author" ? true : false}
                icon={<RiPencilLine />}
                onClick={onHandle("Author")}
              >
                Author
              </MenuItem>
              <MenuItem
                active={home === "Settings" ? true : false}
                icon={<BiCog />}
                onClick={onHandle("Settings")}
              >
                Settings
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem
                active={home === "logout" ? true : false}
                icon={<FiLogOut />}
                onClick={onHandle("logout")}
              >
                <button className="text-black" onClick={() => setNext(true)}>
                  <Link to="/login">
                    <span className="text-black font-bold">SignIn</span>
                  </Link>
                </button>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;

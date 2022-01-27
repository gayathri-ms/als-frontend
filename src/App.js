import Company from "./components/company";

import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import { Menu } from "react-pro-sidebar";

function App() {
  return (
    <div className="App text-center">
      {/* <Menu> */}
      <Sidebar />
      {/* </Menu> */}
    </div>
  );
}

export default App;

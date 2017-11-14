import React from "react";

import MainPanel from "./MainPanel";
import SideBar from "./SideBar";

const Layout = () => {

	return (
      <div className="container">
        <SideBar />
        <MainPanel />
      </div>);
};

export default Layout;

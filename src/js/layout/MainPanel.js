import React from "react";

import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import MainContent from "./MainContent";

const MainPanel = () => {
    return (
      <div className="main-panel">
        <NavBar title="Dashboard"/>
        <MainContent />
      </div>
    );
};

export default MainPanel;

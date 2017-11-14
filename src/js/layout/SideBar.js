import React from "react";
import SideBarItem from "../components/SideBarItem";

let icon1 = "../../images/clock.png",
	icon2 = "../../images/folder.png",
	icon3 = "../../images/message.png";

const SideBar = () => {
      return (
        <div className="side-bar">
          <div className="side-bar-heading">
            <h3>SABITRADE</h3>
          </div>
          <div className="side-bar-content">
            <SideBarItem active={true} icon={icon1} title="Dashboard"/>
            <SideBarItem icon={icon2} title="Users"/>
            <SideBarItem icon={icon3} title="Orders"/>
            <SideBarItem icon={icon1} title="Database"/>
          </div>
        </div>
    );
}

export default SideBar;

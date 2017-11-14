import React from "react";

const SideBarItem = (props) => {
  let activeClass = props.active ? "active" : "";
  return(
    <div className={"side-bar-item " + activeClass}>
      <img src={props.icon} />
      <p>{props.title}</p>
    </div>
  );
  };

export default SideBarItem;

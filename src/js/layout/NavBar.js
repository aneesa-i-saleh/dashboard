import React from "react";

import SearchBar from "../components/SearchBar"

let icon1 = "../../images/message.png",
	icon2 = "../../images/folder.png",
	icon3 = "../../images/clock.png",
	profilePicture = "../../images/girl.jpg";

const NavBar = (props) => {

		return (
			<nav className="topnav" id="myTopnav">
        <h1 className="nav-title">{props.title}</h1>
        <div className="nav-items-right">
          <a><img className="nav-icon" src={icon1} /></a>
          <a><img className="nav-icon" src={icon2} /></a>
          <a><img className="nav-icon" src={icon3} /></a>
          <SearchBar />
          <div className="profile">
            <p className="profile-name">Aneesa Saleh</p>
          <a><img className="profile-img" src={profilePicture} /></a>
          </div>
        </div>
      </nav>
		);
}

export default NavBar;

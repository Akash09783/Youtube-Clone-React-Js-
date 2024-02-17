import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logos from "../../assets/logos.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
const Navbar = () => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu_icon" src={menu_icon} alt="" />
        <img className="logo" src={logos} alt="" />
        </div>

        <div className="nav-middle flex-div">
        <div className="search-box ">
        <input type="text" placeholder="search" />
          <img src={search_icon} alt="" />
        </div>
          
        </div>

        <div className="nav-right flex-div">
          <img src={upload_icon} alt="" />
          <img src={more_icon} alt="" />
          <img src={notification_icon} alt="" />
          <img src={profile_icon} alt="" className="user-icon" />
        </div>

    </nav>
  );
};

export default Navbar;

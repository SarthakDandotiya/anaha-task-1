import React from "react";
import Breadcrum from "./Breadcrum";
import "./Navbar.css";
import errorIcon from "../images/error.svg";
import optionsIcon from "../images/apps.svg";
import notificationIcon from "../images/notifications.svg";
import avatarIcon from "../images/Avatar.png";
import downIcon from "../images/down-arrow.svg";
import searchIcon from "../images/search.svg";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <h2 className="brand">ANAHA</h2>
                <Breadcrum pages={["Patient Profile", "Analytics"]} />
            </div>
            <div className="searchContainer">
                <img
                    src={searchIcon}
                    alt="Search Icon"
                    className="search-icon"
                />
                <input
                    type="text"
                    className="search"
                    // &#128269;
                    placeholder="Search"
                />
                <img
                    src={downIcon}
                    alt="Search Dropdown"
                    className="search-dropdown"
                />
            </div>
            <div className="navbar-right">
                <img src={errorIcon} alt="Alert" />
                <img src={optionsIcon} alt="Options" />
                <img src={notificationIcon} alt="Notifications" />
                <div className="avatar">
                    <img src={avatarIcon} alt="Avatar" />
                    <p>Dr.Raquel</p>
                    <img src={downIcon} alt="Dropdown Menu" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

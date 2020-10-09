import React from "react";
import "./Notification.css";
import notificationIcon from "../images/notifications.svg";

const Notification = ({ count }) => {
    return (
        <div className="notification-container">
            <p>{count}</p>
            <img src={notificationIcon} alt="Notifications" />
        </div>
    );
};

export default Notification;

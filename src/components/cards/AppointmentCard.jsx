import React from "react";
import "./AppointmentCard.css";

const AppointmentCard = () => {
    return (
        <div className="appointment-card">
            <p
                className="appointment-card-title"
                style={{
                    textAlign: "left",
                }}
            >
                {" "}
                Past Appointment
            </p>
            <p className="appointment-card-other">
                <span
                    style={{
                        marginRight: "8px",
                        color: "#2379db",
                        lineHeight: "24px",
                    }}
                >
                    10AM - 11AM
                    <br />
                    Dr. Rakesh Chawan
                </span>
                <span
                    style={{
                        marginBottom: "20px",
                    }}
                >
                    2 Sept
                </span>
            </p>
        </div>
    );
};

export default AppointmentCard;

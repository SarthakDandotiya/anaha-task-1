import React from "react";
import "./Breadcrum.css";

import rightIcon from "../images/right-arrow.svg";

const Breadcrum = ({ pages }) => {
    return (
        <div className="breadcrum">
            {pages.map((el, i) => {
                if (i < pages.length - 1) {
                    return (
                        <>
                            <a href="google.com" className="crum">
                                {el}
                                {/* {` `} &gt; {` `} */}
                            </a>
                            <img
                                src={rightIcon}
                                alt="Right Arrow"
                                className="crum-arrow"
                            />
                        </>
                    );
                } else {
                    return (
                        <a href="google.com" className="crum" key={i}>
                            {el}
                        </a>
                    );
                }
            })}
        </div>
    );
};

export default Breadcrum;

import React from "react";
import "./LabResults.css";

const LabResults = () => {
    return (
        <div className="lab-results">
            <div>
                <p className="lab-results-date">5 August</p>
                <p className="lab-results-item">Sugar</p>
                <p className="lab-results-amount">140 mg/dL</p>
            </div>
            <div>
                <p className="lab-results-date">5 August</p>
                <p className="lab-results-item">Haemoglobin</p>
                <p className="lab-results-amount">140 mg/dL</p>
            </div>
            <div>
                <p className="lab-results-date">5 August</p>
                <p className="lab-results-item">White Blood Cell</p>
                <p className="lab-results-amount">140 mg/dL</p>
            </div>
            <div>
                <p className="lab-results-date">5 August</p>
                <p className="lab-results-item">Lymphocyte</p>
                <p className="lab-results-amount">3800</p>
            </div>
            <div>
                <p className="lab-results-date">5 August</p>
                <p className="lab-results-item">Red Blood Cells</p>
                <p className="lab-results-amount">4.9 million cells/mcL</p>
            </div>
        </div>
    );
};

export default LabResults;

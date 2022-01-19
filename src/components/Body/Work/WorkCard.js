import React from "react";
import "./WorkCard.css";

function WorkCard({ item }) {
  return (
    <div className="work-card">
      <img className="work-logo" src={item.companyLogo} />
      <div className="work-info">
        <label className="comapny-name">{item.company}</label>
        <div className="work-dates">
          <labe>{item.dateJoining}</labe>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-description">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;

import React from "react";
import Separator from "../../../Common/Separator/Separator";
import { WorkData } from "../../data/WorkData";
import "./Work.css";
import WorkCard from "./WorkCard";

function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;

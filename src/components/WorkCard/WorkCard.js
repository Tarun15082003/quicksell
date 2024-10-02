import React, { useContext } from "react";
import "./WorkCard.css";
import AppContext from "../../store/app-context";
import { group_by } from "../../constansts";

const WorkCard = ({ element }) => {
  const { appdata } = useContext(AppContext);
  const user = appdata["users"].find((user) => user.id === element.userId);

  const priorityMap = {
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low",
    0: "No priority",
  };

  let priority = priorityMap[element.priority];

  if (priority === "No priority") {
    priority = "Nopriority";
  }

  let status = element.status;
  if (status == "In progress") {
    status = "Inprogress";
  }

  return (
    element && (
      <div className="workcardcontainer">
        <div className="title">
          <span style={{ fontSize: "12px", color: "#666" }}>{element.id}</span>
          <span style={{ fontSize: "12px", color: "#666" }}>{user.name}</span>
        </div>
        <div className="description">
          <span style={{ paddingRight: "5px" }}>
            {group_by["Status"][status]["pic"]}
          </span>
          <span style={{ fontWeight: "bold", fontSize: "15px" }}>
            {element.title}
          </span>
        </div>
        <div className="details">
          <span
            style={{
              borderRadius: "5px",
              border: "1px solid #ccc",
              padding: "3px 2px 2px 2px",
            }}
          >
            {group_by["Priority"][priority]["pic"]}
          </span>
          <span
            style={{
              marginLeft: "5px",
              fontSize: "12px",
              color: "#666",
              borderRadius: "5px",
              border: "1px solid #ccc",
              padding: "5px 5px 5px 5px",
            }}
          >
            {element["tag"][0]}
          </span>
        </div>
      </div>
    )
  );
};

export default WorkCard;

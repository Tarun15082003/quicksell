import React from "react";
import { useContext } from "react";
import AppContext from "../../store/app-context";
import { group_by } from "../../constansts";
import GroupingCard from "../GroupingCard/GroupingCard";
import "./ActionSpace.css";
import { groupTickets } from "../../utils";

const ActionSpace = () => {
  const { groupedBy, sortedBy, appdata } = useContext(AppContext);

  if (appdata["tickets"]) {
    let temp = "";
    if (groupedBy === "Status") temp = "status";
    else if (groupedBy === "Priority") temp = "priority";
    else temp = "userId";
    const groupedData = groupTickets(appdata["tickets"], temp);
    console.log(groupedData);
  }

  return (
    <div className="action-space-body">
      {groupedBy != "Users"
        ? Object.keys(group_by[groupedBy]).map((key) => {
            return (
              <GroupingCard
                key={key}
                value={group_by[groupedBy][key]["value"]}
                pic={group_by[groupedBy][key]["pic"]}
              />
            );
          })
        : appdata["users"].map((user) => {
            return <GroupingCard key={user.id} value={user.name} pic={null} />;
          })}
    </div>
  );
};

export default ActionSpace;

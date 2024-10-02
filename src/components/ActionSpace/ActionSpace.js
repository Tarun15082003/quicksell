import React from "react";
import { useContext } from "react";
import AppContext from "../../store/app-context";
import { group_by } from "../../constansts";
import GroupingCard from "../GroupingCard/GroupingCard";
import "./ActionSpace.css";
import { groupTickets } from "../../utils";

const ActionSpace = () => {
  const { groupedBy, sortedBy, appdata } = useContext(AppContext);
  let groupedData = null;

  // Ensure appdata and tickets exist
  if (appdata && appdata.tickets) {
    let temp =
      groupedBy === "Status"
        ? "status"
        : groupedBy === "Priority"
        ? "priority"
        : "userId";
    groupedData = groupTickets(appdata.tickets, temp);
  }

  return (
    <div className="action-space-body">
      {groupedBy !== "Users" && group_by[groupedBy]
        ? Object.keys(group_by[groupedBy]).map((key) => {
            let c =
              key === "Inprogress"
                ? "In progress"
                : key === "Nopriority"
                ? "No priority"
                : key;
            return (
              <GroupingCard
                key={key}
                value={group_by[groupedBy][key]?.value || ""}
                pic={group_by[groupedBy][key]?.pic || ""}
                data={groupedData ? groupedData[c] : null}
              />
            );
          })
        : appdata && appdata.users
        ? appdata.users.map((user) => {
            return (
              <GroupingCard
                key={user.id}
                value={user.name}
                pic={null}
                data={groupedData ? groupedData[user.id] : null}
              />
            );
          })
        : null}
    </div>
  );
};

export default ActionSpace;

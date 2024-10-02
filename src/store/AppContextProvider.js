import React, { useEffect, useState } from "react";
import AppContext from "./app-context";
import { group_by } from "../constansts";

const AppContextProvider = ({ children }) => {
  const [groupedBy, setgroupedBy] = useState("Status");
  const [sortedBy, setsortedBy] = useState("Priority");
  const [dropdownMenu, setDropDownMenu] = useState(false);
  const [appdata, setappdata] = useState({});

  function changegroupedBy(value) {
    setgroupedBy(value);
    const val = dropdownMenu;
    setDropDownMenu(false);
  }

  function changesortedBy(value) {
    setsortedBy(value);
    const val = dropdownMenu;
    setDropDownMenu(false);
  }

  function toogleDropdownMenu() {
    const val = dropdownMenu;
    setDropDownMenu(!val);
  }

  function handleAppdata(data) {
    setappdata(data);
  }

  const appContextValue = {
    groupedBy,
    sortedBy,
    dropdownMenu,
    appdata,
    changegroupedBy,
    changesortedBy,
    toogleDropdownMenu,
    handleAppdata,
  };

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        handleAppdata(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

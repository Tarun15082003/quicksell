import { createContext } from "react";

const AppContext = createContext({
  groupedBy: "",
  sortedBy: "",
  dropdownMenu: false,
  appdata: {},
  changegroupedBy: () => {},
  changesortedBy: () => {},
  toogleDropdownMenu: () => {},
  handleAppdata: () => {},
});

export default AppContext;

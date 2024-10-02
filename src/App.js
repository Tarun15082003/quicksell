import { useEffect, useContext } from "react";
import "./App.css";
import ActionSpace from "./components/ActionSpace/ActionSpace";
import ToolBar from "./components/ToolBar/ToolBar";
import AppContextProvider from "./store/AppContextProvider";
import AppContext from "./store/app-context";

function App() {
  return (
    <AppContextProvider>
      <div className="container">
        <header className="head">
          <ToolBar />
        </header>
        <div className="actionspace">
          <ActionSpace />
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import DataVerwerking from "./Components/DataVerwerking";



function App() {
  return (
    <div>
      <Outlet />
      <DataVerwerking />
    </div>
    )
}


export default App;

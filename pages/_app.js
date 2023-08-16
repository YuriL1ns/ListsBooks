import React from "react";
import "../styles/globals.css";
import { FilterProvider } from "./components/Context/FilterContext";
import Home from "./index";

const App = () => {
  return (
    <FilterProvider>
      <Home />
    </FilterProvider>
  );
};

export default App;

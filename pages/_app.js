import React from "react";
import "../styles/globals.css";
import { FilterProvider } from "./components/Context/FilterContext";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  return (
    <FilterProvider>
      <SearchBar />
    </FilterProvider>
  );
};

export default App;

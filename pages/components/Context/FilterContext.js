import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [selectedThemes, setSelectedThemes] = useState([]);

  const updateSelectedThemes = (themes) => {
    setSelectedThemes(themes);
  };

  const contextValue = {
    selectedThemes,
    updateSelectedThemes,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export default useFilterContext;

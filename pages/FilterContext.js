import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [selectedThemes, setSelectedThemes] = useState("");

  const updateSelectedThemes = (themes) => {
    setSelectedThemes(themes);
  };

  return (
    <FilterContext.Provider value={{ selectedThemes, updateSelectedThemes }}>
      {children}
    </FilterContext.Provider>
  );
};
export default FilterContextPage;

import React, { createContext, useContext, useState } from "react";

// Criando o contexto
const FilterContext = createContext();

// Hook personalizado para usar o contexto
export const useFilterContext = () => useContext(FilterContext);

// Componente de provedor do contexto
export const FilterProvider = ({ children }) => {
  const [selectedThemes, setSelectedThemes] = useState([]);

  const updateSelectedThemes = (themes) => {
    setSelectedThemes(themes);
  };

  // Criando o valor do contexto
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

export default FilterContext;

import React, { useState } from "react";

const FilterSearch = ({}) => {
  const [selectedThemes, setSelectedThemes] = useState([]);

  const handleThemeClick = (theme) => {
    if (selectedThemes.includes(theme)) {
      setSelectedThemes(selectedThemes.filter((t) => t !== theme));
    } else {
      setSelectedThemes([...selectedThemes, theme]);
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Filtrar por Tema:</h2>
      <label className="inline-flex items-center mr-4">
        <input
          type="radio"
          name="theme"
          value="romance"
          checked={selectedThemes.includes("romance")}
          onChange={() => handleThemeClick("romance")}
        />
        <span className="ml-2">Romance</span>
      </label>
      <label className="inline-flex items-center mr-4">
        <input
          type="radio"
          name="theme"
          value="suspense"
          checked={selectedThemes.includes("suspense")}
          onChange={() => handleThemeClick("suspense")}
        />
        <span className="ml-2">Suspense</span>
      </label>
      <label className="inline-flex items-center mr-4">
        <input
          type="radio"
          name="theme"
          value="Ficção"
          checked={selectedThemes.includes("Ficção")}
          onChange={() => handleThemeClick("Ficção")}
        />
        <span className="ml-2">Ficção</span>
      </label>
      <label className="inline-flex items-center mr-4">
        <input
          type="radio"
          name="theme"
          value="Educação"
          checked={selectedThemes.includes("Educação")}
          onChange={() => handleThemeClick("Educação")}
        />
        <span className="ml-2">Educação</span>
      </label>
    </div>
  );
};

export default FilterSearch;

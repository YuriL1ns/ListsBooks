import React, { useState } from "react";
import { useFilterContext } from "../Context/FilterContext";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const { selectedThemes } = useFilterContext();
  const [searchError, setSearchError] = useState("");

  const handleSearch = () => {
    if (query.trim() === "" && selectedThemes.length === 0) {
      setSearchError("Preencha o campo de pesquisa ou selecione um filtro.");
      return;
    }

    setSearchError(""); // Limpa o erro se a pesquisa for válida
    onSearch(query || selectedThemes.join(" "), selectedThemes);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center mt-8 justify-center text-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite um termo de pesquisa"
          className="w-full md:w-6/12 px-4 py-2 border rounded-md mb-4 md:mb-0 md:mr-4"
        />
        <div className="flex items-center p-4 space-x-5">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="filter"
              value="romance"
              checked={query === "romance"}
              onChange={() => setQuery("romance")}
            />
            <span className="ml-1">Romance</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="filter"
              value="suspense"
              checked={query === "suspense"}
              onChange={() => setQuery("suspense")}
            />
            <span className="ml-1">Suspense</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="filter"
              value="ficção"
              checked={query === "ficção"}
              onChange={() => setQuery("ficção")}
            />
            <span className="ml-1">Ficção</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="filter"
              value="infantil"
              checked={query === "infantil"}
              onChange={() => setQuery("infantil")}
            />
            <span className="ml-1">Infantil</span>
          </label>
        </div>
        <button
          onClick={handleSearch}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Pesquisar
        </button>
        {searchError && (
          <p className="text-red-500 text-center mt-2">{searchError}</p>
        )}
      </div>
    </>
  );
};

export default SearchBar;

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import BookDetails from "../BookDetails/BookDetails";

const BookItem = ({ book }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  if (!book || !book.volumeInfo) {
    return null; // Não renderiza nada se o livro ou suas informações estiverem indefinidas
  }

  return (
    <>
      <div className="bg-white/80 p-1 rounded-md shadow-md text-center">
        <img
          src={book?.volumeInfo?.imageLinks?.thumbnail || ""}
          alt={book?.volumeInfo?.title || ""}
          className="w-full h-auto mx-auto rounded-sm text-black"
        />
        <h3 className="text-lg font-semibold text-black mt-2">
          {book.volumeInfo.title}
        </h3>
        <p className="text-black">{book.volumeInfo.authors?.join(", ")}</p>
        <button
          onClick={toggleDetails}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
        >
          Ver Detalhes
        </button>

        {showDetails && (
          <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-10">
            <BookDetails book={book} onClose={() => setShowDetails(false)} />
          </div>
        )}
      </div>
    </>
  );
};

export default BookItem;

/* eslint-disable @next/next/no-img-element */
// components/BookDetails.js
import React from "react";

const BookDetails = ({ book }) => {
  return (
    <div className="mt-8">
      <img
        src={book.thumbnail}
        alt={`Capa de ${book.title}`}
        className="mb-4"
      />
      <h1 className="text-2xl font-semibold">{book.title}</h1>
      <p className="text-gray-600 mb-4">{book.author}</p>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;

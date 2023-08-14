/* eslint-disable @next/next/no-img-element */
// components/BookItem.js
import React from "react";
import Link from "next/link";

const BookItem = ({ book }) => {
  return (
    <div className="border p-4">
      <Link href={`/books/${book.id}`}>
        <a>
          <img
            src={book.thumbnail}
            alt={`Capa de ${book.title}`}
            className="mb-2"
          />
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-gray-600">{book.author}</p>
        </a>
      </Link>
    </div>
  );
};

export default BookItem;

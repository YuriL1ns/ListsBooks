// components/BookList.js
import React from "react";
import BookItem from "../BookItem/BookItem";

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;

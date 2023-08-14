// pages/books/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BookDetails from "../../components/BookDetails";
import { getBookById } from "../../utils/googleBooksAPI";

const BookDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) {
      getBookById(id)
        .then((response) => setBook(response))
        .catch((error) => console.error(error));
    }
  }, [id]);

  return (
    <div className="container mx-auto mt-8 px-4">
      {book && <BookDetails book={book} />}
    </div>
  );
};

export default BookDetailsPage;

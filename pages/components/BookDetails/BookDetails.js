/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";

const BookDetails = ({ book, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  if (!book || !book.volumeInfo) {
    // Se o livro ou suas informações estiverem indefinidas, não renderiza nada
    return null;
  }

  const handleHomeClick = () => {
    onClose(); // Fecha o modal e retorna à página principal.
  };

  if (isModalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-10 ${
        isModalOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-4 rounded-md shadow-lg max-w-lg w-full sm:w-[80%] md:w-[70%] lg:w-[70%] xl:w-[60%]">
        <h3 className="text-center text-lg font-semibold text-black mb-2">
          {book.volumeInfo.title}
        </h3>
        <p className="text-center text-black mb-4">
          Autor(es): {book.volumeInfo.authors?.join(", ")}
        </p>
        <p className="text-center text-black max-h-60 overflow-y-auto">
          {book.volumeInfo.description}
        </p>
        <div className="flex flex-col gap-2 justify-center sm:flex-row">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full sm:w-auto"
          >
            Fechar
          </button>
          <a
            href="/"
            onClick={handleHomeClick}
            className="bg-gray-300 text-black px-4 py-2 rounded-md mt-4 w-full sm:w-auto"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

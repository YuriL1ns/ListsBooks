import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SearchBar from "./components/SearchBar/SearchBar";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import { FilterProvider } from "./components/Context/FilterContext";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL; // URL base da API do Google Books

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [showFeaturedBooks, setShowFeaturedBooks] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedThemes, setSelectedThemes] = useState("");

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/volumes`, {
        params: {
          q: query,
          key: process.env.NEXT_PUBLIC_KEY_API_GOOGLE,
          maxResults: 24,
        },
      });

      if (response.data.items && response.data.items.length === 0) {
        setError("Nenhum livro encontrado para a busca realizada.");
      } else {
        setSearchResults(response.data.items);
        setShowFeaturedBooks(false);
        setError(null);
      }
    } catch (error) {
      console.error("Erro na busca de livros:", error);
      setError(
        "Ocorreu um erro ao buscar os livros. Por favor, tente novamente mais tarde.",
      );
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseBookDetails = () => {
    setSelectedBook(null);
  };

  const handleFilterChange = (themes) => {
    setSelectedThemes(themes);
  };

  const handleApplyFilters = () => {
    handleSearch(searchTerm, selectedThemes);
  };

  useEffect(() => {
    async function fetchFeaturedBooks() {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/volumes?q=featured-books`,
          {
            params: {
              key: process.env.NEXT_PUBLIC_KEY_API_GOOGLE,
              maxResults: 24,
            },
          },
        ); // Rota da API de livros em destaques.
        if (response.data.items && response.data.items.length === 0) {
          setError("Nenhum livro em destaque disponível no momento.");
        } else {
          setFeaturedBooks(response.data.items);
          setError(null); // Limpa qualquer mensagem de erro anterior
        }
      } catch (error) {
        console.error("Erro ao obter livros em destaque:", error);
        setError(
          "Ocorreu um erro ao obter os livros em destaque. Por favor, tente novamente mais tarde.",
        );
      }
    }

    fetchFeaturedBooks();
  }, []);

  return (
    <>
      <FilterProvider>
        <Head>
          <title>Lists Books</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className="container mx-auto mt-8 px-4">
            <div>
              <h1 className="text-center font-bold text-xl">
                Lista de Livros.
              </h1>
            </div>

            <SearchBar onSearch={(query) => handleSearch(query)} />

            {showFeaturedBooks ? (
              <BookList books={featuredBooks} maxResults={24} />
            ) : (
              <BookList books={searchResults} maxResults={24} />
            )}
            {selectedBook && (
              <BookDetails
                book={selectedBook}
                onClose={handleCloseBookDetails}
              />
            )}
            {error && (
              <div className="text-red-500 text-center mt-4">{error}</div>
            )}
          </div>

          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <div className={styles.thirteen}>
              <Image
                src="/thirteen.svg"
                alt="13"
                width={40}
                height={31}
                priority
              />
            </div>
          </div>
        </main>
      </FilterProvider>
    </>
  );
}

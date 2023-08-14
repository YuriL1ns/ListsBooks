// utils/googleBooksAPI.js
import axios from "axios";

const API_KEY = process.env.KEY_API_GOOGLE; // Substitua pela sua chave API do Google Books.

const instance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
});

export const getBooksByQuery = async (query) => {
  try {
    const response = await instance.get("volumes", {
      params: {
        q: query,
        key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBookById = async (id) => {
  try {
    const response = await instance.get(`volumes/${id}`, {
      params: {
        key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

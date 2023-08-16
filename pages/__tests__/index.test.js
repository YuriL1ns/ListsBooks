import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar/SearchBar";
import BookList from "../components/BookList/BookList";
import BookItem from "../components/BookItem/BookItem";
import BookDetails from "../components/BookDetails/BookDetails";
import Home from "../index"; // Certifique-se de fornecer o caminho correto para o arquivo Home

// Teste unitário componente SearchBar.
const mockFilterContext = {
  selectedThemes: ["romance"],
};

jest.mock("../FilterContext", () => ({
  useFilterContext: jest.fn(() => mockFilterContext),
}));

test("handles search button click and checkbox change", () => {
  const onSearchMock = jest.fn();
  const { getByText, getByLabelText } = render(
    <SearchBar onSearch={onSearchMock} />,
  );

  const searchButton = getByText("Pesquisar");
  const romanceCheckbox = getByLabelText("Romance");

  fireEvent.click(romanceCheckbox);
  fireEvent.click(searchButton);

  expect(onSearchMock).toHaveBeenCalledWith("romance", ["romance"]);
});

// Teste unitário componente BookList.
const mockBooksList = [
  {
    id: 1,
    title: "Think and Grow Rich",
    authors: ["Napoleon Hill"],
    volumeInfo: {},
  },
  {
    id: 2,
    title: "Harry Potter and the Sorcerer's Stone",
    authors: ["J.K. Rowling"],
    volumeInfo: {},
  },
];

test("renders BookList correctly", () => {
  render(<BookList books={mockBooksList} />);
});

// Teste unitário componente BookItem.
const mockBookItem = {
  id: 1,
  title: "Think and Grow Rich",
  authors: ["Napoleon Hill"],
  volumeInfo: {},
};

test("renders BookItem correctly", () => {
  render(<BookItem book={mockBookItem} />);
});

test("clicking Ver Detalhes opens BookDetails", () => {
  render(<BookItem book={mockBookItem} />);
  const buttonElement = screen.getByText("Ver Detalhes");

  fireEvent.click(buttonElement);
});

// Teste unitário componente BookDetails.
const mockBookDetails = {
  title: "Think and Grow Rich",
  authors: ["Napoleon Hill"],
  description: "This is a description.",
  volumeInfo: {},
};

test("renders BookDetails correctly", () => {
  render(<BookDetails book={mockBookDetails} onClose={() => {}} />);
});

test("clicking Fechar calls onClose", () => {
  const mockOnClose = jest.fn();
  render(<BookDetails book={mockBookDetails} onClose={mockOnClose} />);
  const closeButton = screen.getByText("Fechar");

  fireEvent.click(closeButton);

  expect(mockOnClose).toHaveBeenCalled();
});

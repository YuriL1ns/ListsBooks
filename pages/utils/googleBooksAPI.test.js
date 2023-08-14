import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../index";
import { getBooksByQuery } from "./googleBooksAPI";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

describe("Util da API do Google Books", () => {
  it("busca livros pela consulta", async () => {
    const data = {
      items: [
        // Dados fictícios
      ],
    };
    mock.onGet(/volumes/).reply(200, data);

    const { container } = render(<Home />);

    const searchInput = screen.getByPlaceholderText(
      "Digite um termo de pesquisa",
    );
    const searchButton = screen.getByText("Pesquisar");
    const searchText = "consulta de exemplo"; // O texto que você deseja inserir

    userEvent.type(searchInput, searchText);
    userEvent.click(searchButton);

    // Aguarda o componente concluir a busca e renderização
    await waitFor(() => {
      // Realiza as verificações no conteúdo renderizado
      expect(searchInput.value).toBe(searchText); // Verifica o valor do input
      // Adicione mais verificações com base no comportamento do seu componente
    });
  });
});

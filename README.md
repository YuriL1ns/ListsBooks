# Lista de Livros - Aplicação Next.js

Bem-vindo ao repositório da aplicação "Lista de Livros" desenvolvida utilizando Next.js e Tailwind CSS. Neste projeto, criamos uma aplicação que permite aos usuários pesquisar por livros específicos utilizando a API do Google Books, exibir detalhes de cada livro e aplicar filtros de pesquisa.

## Funcionalidades Principais

- Página inicial com uma barra de pesquisa e uma lista de livros.
- Pesquisa por termos de pesquisa e filtros de temas.
- Exibição de detalhes de cada livro, incluindo título, autor, descrição e outras informações relevantes.
- Interface responsiva para dispositivos móveis e desktop.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/): Framework React para criação de aplicativos web rápidos e escaláveis.
- [Tailwind CSS](https://tailwindcss.com/): Biblioteca de estilização CSS utilitária para criar interfaces modernas e responsivas.
- [Axios](https://axios-http.com/): Cliente HTTP para fazer requisições à API do Google Books.
- [Jest](https://jestjs.io/): Framework de testes unitários para JavaScript.

## Passos do Desenvolvimento

1. **Configuração do Projeto:**
   - Inicializamos um novo projeto Next.js utilizando o comando `npx create-next-app`.
   - Configuramos o ambiente e as variáveis de ambiente para a chave da API do Google Books.

2. **Componentes Reutilizáveis:**
   - Criamos componentes reutilizáveis para a barra de pesquisa (`SearchBar`), a lista de livros (`BookList`), cada item da lista (`BookItem`) e os detalhes do livro (`BookDetails`).

3. **Integração com a API do Google Books:**
   - Utilizamos o Axios para fazer requisições à API do Google Books.
   - Implementamos a funcionalidade de pesquisa por termos de pesquisa e filtros de temas.

4. **Roteamento e Páginas Dinâmicas:**
   - Utilizamos as funcionalidades do Next.js para criar páginas estáticas (Static Generation) e páginas dinâmicas para os detalhes dos livros.

5. **Estilização Responsiva:**
   - Utilizamos o Tailwind CSS para estilizar a aplicação de forma responsiva, garantindo uma boa experiência em dispositivos móveis e desktop.

6. **Gerenciamento de Estado:**
   - Utilizamos os hooks `useState` e `useEffect` para gerenciar o estado da aplicação, realizar requisições e atualizar a interface conforme necessário.

7. **Tratamento de Erros:**
   - Implementamos tratamento de erros para lidar com situações em que a API do Google Books retorna resultados vazios ou erros de requisição.

8. **Funcionalidades Extras:**
   - Implementamos uma funcionalidade de filtro de temas na barra de pesquisa.
   - Adicionamos a opção de paginação na lista de livros para exibir mais resultados.

9. **Testes Unitários:**
   - Utilizamos o Jest para escrever testes unitários para os componentes e funções principais da aplicação.

## Execução Local

1. Clone este repositório para o seu ambiente local.
2. Navegue para o diretório do projeto no terminal.
3. Execute `npm install` para instalar as dependências.
4. Crie um arquivo `.env.local` na raiz do projeto com as variáveis `NEXT_PUBLIC_BASE_URL` e `NEXT_PUBLIC_KEY_API_GOOGLE`.
5. Execute `npm run dev` para iniciar o servidor de desenvolvimento.

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma nova branch com a sua contribuição.
3. Faça as alterações desejadas e adicione commits.
4. Envie um Pull Request neste repositório.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por [Yuri Lins](https://github.com/YuriL1ns) - [LinkedIn](https://www.linkedin.com/in/yuri-lins-304a0523a/)

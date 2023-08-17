# Lista de Livros - Aplicação em Next.js com TailwindCSS.

Bem-vindo ao repositório da aplicação "Lista de Livros" desenvolvida utilizando Next.js e Tailwind CSS. Neste projeto, criamos uma aplicação que permite aos usuários pesquisar por livros específicos utilizando a API do Google Books, exibir detalhes de cada livro e aplicar filtros de pesquisa.

## Funcionalidades Principais

- Página inicial com uma barra de pesquisa e uma lista de livros em destaques.
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

## Ambiente de Desenvolvimento (Dev):

1. **Configuração Inicial:**

    a. Certifique-se de ter o Node.js e o npm (ou yarn) instalados na sua máquina.

    b. Crie um novo diretório para o seu projeto e navegue até ele no terminal.

    c. Inicie um novo projeto Node.js executando o seguinte comando:

    ```bash
    npm init -y
    ```

2. **Instalação de Dependências:**

    a. Instale as dependências necessárias para testes usando Jest e @testing-library:

    ```bash
    npm install --save-dev jest @testing-library/react @testing-library/jest-dom
    ```

3. **Estrutura de Pastas:**

    a. Organize a estrutura de pastas do seu projeto. Um exemplo básico:

    ```
    /my-project
    ├── jest.config.js
    ├── jest.setup.js
    ├── package.json
    ├── pages/
    │   ├── components/
    │   │   └── ...
    │   └── ...
    ├── __tests__/
    │   ├── index.test.js
    │   └── ...
    └── ...
    ```

4. **Configuração do Jest:**

    a. Crie um arquivo `jest.config.js` na raiz do projeto com o seguinte conteúdo:

    ```javascript
    module.exports = {
      setupFilesAfterEnv: ['./jest.setup.js'],
      // ... outras configurações que desejar ou necessitar ...
    };
    ```

    b. Crie um arquivo `jest.setup.js` na raiz do projeto com o seguinte conteúdo:

    ```javascript
    import '@testing-library/jest-dom/extend-expect';
    ```

5. **Escrevendo e Executando Testes:**

    a. Crie os arquivos de teste na pasta `__tests__` seguindo o padrão de nomenclatura, como `components.test.js`.

    b. Escreva testes usando o Jest e as bibliotecas de teste.

    c. Execute os testes usando o seguinte comando:

    ```bash
    npx jest
    ```

## Executando o Projeto em Localhost:

1. Após a instalação das dependências, inicie o aplicativo localmente com o seguinte comando:

    ```bash
    npm run dev
    ```

2. **Acessando o Aplicativo:**

    a. Abra o navegador da web e acesse o seguinte endereço:

    ```
    http://localhost:3000
    ```
    
    b. Agora você deve ver o aplicativo sendo executado localmente no seu navegador.

3. **Executando os Testes:**

    a. No seu terminal pressione "Ctrl + C", para encerrar o servidor local.

    b. Para executar os testes unitários, você pode usar o seguinte comando:

    ```bash
    npx jest
    ```

## Ambiente de Produção (Prod):

1. **Preparação para Produção:**

    a. Certifique-se de que seu projeto está pronto para ser implantado em produção, com todas as dependências e arquivos necessários.

2. **Testes Unitários:**

    a. Seus testes unitários devem ser executados durante o processo de integração contínua ou antes de implantar novas versões do seu aplicativo.

    b. Integre a execução dos testes unitários em seus scripts de implantação ou ferramentas de integração contínua.

3. **Ambiente de Produção:**

    a. Depois de implantar em produção, monitore a saúde do seu aplicativo e a integridade dos testes unitários.

    b. Caso surjam problemas ou regressões, investigue e corrija as falhas nos testes e no código do aplicativo.

A Execução de testes unitários é uma parte importante do desenvolvimento de software, pois ajuda a garantir que seu código esteja funcionando conforme o esperado e evita a introdução de bugs em seu projeto.

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma nova branch com a sua contribuição.
3. Faça as alterações desejadas e adicione commits.
4. Envie um Pull Request neste repositório.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por [Yuri Lins](https://github.com/YuriL1ns) - [LinkedIn](https://www.linkedin.com/in/yuri-lins-304a0523a/)

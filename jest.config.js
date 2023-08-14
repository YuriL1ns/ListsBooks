module.exports = {
  // Indica que os testes são executados em um ambiente Node.js
  testEnvironment: "node",

  // Define os padrões de busca para os arquivos de teste
  testRegex: "\\.test\\.js$",

  // Define a transformação de código usando Babel
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testEnvironment: "jest-environment-jsdom",

  // Configura o mapeamento de módulos de estilo
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },

  // Define as extensões de arquivo a serem consideradas
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};

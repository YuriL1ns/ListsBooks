module.exports = {
  swcMinify: false,
  reactStrictMode: true, // Habilita o modo de estrita conformidade com o React
  optimizeFonts: false, // Desativa a otimização de carregamento de fontes
  images: {
    domains: ["example.com"], // Domínios permitidos para imagens
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && isServer) {
      // Configurações de otimização para produção do lado do servidor
    }
    return config;
  },
};

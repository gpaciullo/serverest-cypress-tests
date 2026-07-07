export const createProductPayload = () => {
  const timestamp = Date.now();

  return {
    nome: `Produto QA ${timestamp}`,
    preco: 100,
    descricao: "Produto criado via automação Cypress",
    quantidade: 10,
  };
};

export default class ProdutoService {
  static cadastrarProduto(produto, token) {
    return cy.request({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/produtos`,
      headers: {
        Authorization: token,
      },
      body: produto,
      failOnStatusCode: false,
    });
  }

  static listarProdutos() {
    return cy.request({
      method: "GET",
      url: `${Cypress.env("apiUrl")}/produtos`,
    });
  }
}

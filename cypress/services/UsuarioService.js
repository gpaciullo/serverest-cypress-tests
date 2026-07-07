export default class UsuarioService {
  static cadastrarUsuario(usuario) {
    return cy.request({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/usuarios`,
      body: usuario,
      failOnStatusCode: false,
    });
  }

  static buscarUsuarios() {
    return cy.request({
      method: "GET",
      url: `${Cypress.env("apiUrl")}/usuarios`,
    });
  }

  static excluirUsuario(userId) {
    return cy.request({
      method: "DELETE",
      url: `${Cypress.env("apiUrl")}/usuarios/${userId}`,
      failOnStatusCode: false,
    });
  }
}

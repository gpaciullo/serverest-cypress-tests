import { loginSelectors } from "../selectors/loginSelectors";

class LoginPage {
  acessar() {
    cy.visit("/login");
  }

  preencherEmail(email) {
    cy.get(loginSelectors.email).clear().type(email);
  }

  preencherSenha(senha) {
    cy.get(loginSelectors.senha).clear().type(senha);
  }

  clicarEntrar() {
    cy.get(loginSelectors.entrar).click();
  }

  realizarLogin(email, senha) {
    this.preencherEmail(email);
    this.preencherSenha(senha);
    this.clicarEntrar();
  }
}

export default new LoginPage();

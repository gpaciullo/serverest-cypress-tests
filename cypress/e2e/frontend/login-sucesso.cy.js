import UsuarioService from "../../services/UsuarioService";
import { createUserPayload } from "../../factories/userFactory";
import LoginPage from "../../pages/LoginPage";

describe("Frontend - Login", () => {
  it("deve realizar login com sucesso", () => {
    const usuario = createUserPayload();

    UsuarioService.cadastrarUsuario(usuario);

    LoginPage.acessar();

    LoginPage.realizarLogin(usuario.email, usuario.password);

    cy.url().should('not.include', '/login')
    cy.contains('Lista de Compras', { timeout: 10000 }).should('be.visible')
  });
});

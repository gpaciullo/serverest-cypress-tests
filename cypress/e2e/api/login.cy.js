import UsuarioService from "../../services/UsuarioService";
import LoginService from "../../services/LoginService";
import { createUserPayload } from "../../factories/userFactory";

describe("API - Login", () => {
  it("deve realizar login com sucesso", () => {
    const user = createUserPayload();

    UsuarioService.cadastrarUsuario(user).then(() => {
      LoginService.login(user.email, user.password).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq("Login realizado com sucesso");
        expect(response.body.authorization).to.exist;
      });
    });
  });
});

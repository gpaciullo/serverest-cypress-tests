import UsuarioService from "../../services/UsuarioService";
import LoginService from "../../services/LoginService";
import ProdutoService from "../../services/ProdutoService";

import { createUserPayload } from "../../factories/userFactory";
import { createProductPayload } from "../../factories/productFactory";

describe("API - Produtos", () => {
  it("deve cadastrar um produto com usuário administrador", () => {
    const admin = createUserPayload("true");
    const produto = createProductPayload();

    UsuarioService.cadastrarUsuario(admin).then(() => {
      LoginService.login(admin.email, admin.password).then((loginResponse) => {
        expect(loginResponse.status).to.eq(200);

        const token = loginResponse.body.authorization;

        ProdutoService.cadastrarProduto(produto, token).then(
          (produtoResponse) => {
            expect(produtoResponse.status).to.eq(201);
            expect(produtoResponse.body.message).to.eq(
              "Cadastro realizado com sucesso",
            );

            expect(produtoResponse.body._id).to.exist;
          },
        );
      });
    });
  });
});

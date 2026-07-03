import UsuarioService from '../../services/UsuarioService'
import { createUserPayload } from '../../factories/userFactory'
import { createProductPayload } from '../../factories/productFactory'

import LoginPage from '../../pages/LoginPage'
import ProdutoPage from '../../pages/ProdutoPage'

describe('Frontend - Cadastro de Produto', () => {

  it('deve cadastrar um produto com usuário administrador', () => {

    const admin = createUserPayload('true')
    const produto = createProductPayload()

    UsuarioService.cadastrarUsuario(admin).then(() => {

      LoginPage.acessar()
      LoginPage.realizarLogin(admin.email, admin.password)

      ProdutoPage.cadastrarProduto(produto)

      cy.contains(produto.nome, { timeout: 10000 }).should('be.visible')

    })

  })

})
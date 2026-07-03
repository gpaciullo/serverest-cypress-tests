import UsuarioService from '../../services/UsuarioService'
import { createUserPayload } from '../../factories/userFactory'
import LoginPage from '../../pages/LoginPage'

describe('Frontend - Login', () => {

    it('deve realizar login com sucesso', () => {

        const usuario = createUserPayload()

        UsuarioService.cadastrarUsuario(usuario)

        LoginPage.acessar()

        LoginPage.realizarLogin(
            usuario.email,
            usuario.password
        )

        cy.pause()

        cy.contains('Home').should('be.visible')

    })

})
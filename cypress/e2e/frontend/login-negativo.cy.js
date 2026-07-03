import LoginPage from '../../pages/LoginPage'

describe('Frontend - Login', () => {
  it('deve exibir erro ao tentar login com credenciais inválidas', () => {
    LoginPage.acessar()

    LoginPage.realizarLogin('usuario.invalido@serverest.com', 'senhaerrada')

    cy.contains('Email e/ou senha inválidos').should('be.visible')
  })
})
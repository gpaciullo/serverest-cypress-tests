import UsuarioService from '../../services/UsuarioService'
import { createUserPayload } from '../../factories/userFactory'

describe('API - Usuários', () => {
  it('deve cadastrar um usuário com sucesso', () => {
    const user = createUserPayload()

    UsuarioService.cadastrarUsuario(user).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
      expect(response.body._id).to.exist
    })
  })

  it('não deve permitir cadastrar usuário com e-mail já existente', () => {
    const user = createUserPayload()

    UsuarioService.cadastrarUsuario(user).then((response) => {
      expect(response.status).to.eq(201)
    })

    UsuarioService.cadastrarUsuario(user).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('Este email já está sendo usado')
    })
  })
})
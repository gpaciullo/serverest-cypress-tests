export const createUserPayload = (admin = 'false') => {
  const timestamp = Date.now()

  return {
    nome: `Gabriel QA ${timestamp}`,
    email: `gabriel.qa.${timestamp}@serverest.com`,
    password: 'Teste@123',
    administrador: admin
  }
}
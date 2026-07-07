import { produtoSelectors } from "../selectors/produtoSelectors";

class ProdutoPage {
  acessarCadastro() {
    cy.get(produtoSelectors.cadastrarProduto).click();
  }

  preencherProduto(produto) {
    cy.get(produtoSelectors.nome).type(produto.nome);
    cy.get(produtoSelectors.preco).type(produto.preco);
    cy.get(produtoSelectors.descricao).type(produto.descricao);
    cy.get(produtoSelectors.quantidade).type(produto.quantidade);
  }

  salvar() {
    cy.get(produtoSelectors.cadastrar).click();
  }

  cadastrarProduto(produto) {
    this.acessarCadastro();
    this.preencherProduto(produto);
    this.salvar();
  }
}

export default new ProdutoPage();

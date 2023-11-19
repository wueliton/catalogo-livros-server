const {Livro} = require("./livro-schema");

const obterLivros = () => {
  return Livro.find();
};

const incluir = (livro) => {
  return Livro.create(livro);
};

const excluir = (cod) => {
  return Livro.deleteOne({ _id: cod });
};

module.exports = { obterLivros, incluir, excluir };

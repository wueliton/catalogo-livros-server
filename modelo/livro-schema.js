const { banco } = require("./conexao");

const Schema = banco.Schema;
const ObjectId = Schema.ObjectId;

const LivroSchema = new Schema({
    titulo: String,
    codEditora: Number,
    resumo: String,
    autores: [String]
});

const Livro = banco.model('livros', LivroSchema);

module.exports = {Livro, ObjectId};
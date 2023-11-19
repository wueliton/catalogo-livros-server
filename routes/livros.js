var express = require('express');
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');
var router = express.Router();

router.get('/', async function(req, res, next) {
    const livros = await obterLivros();

    res.send(livros).status(200);
});

router.post('/', async function(req, res, next) {
    try {
        const livro = req.body;
        await incluir(livro);
        res.status(201).send();
    } catch {
        res.status(500).send();
    }
});

router.delete('/:id', async function(req, res, next) {
        const {id} = req.params;
        await excluir(id);
        res.status(200).send();
})

module.exports = router;
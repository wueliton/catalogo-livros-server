import { Livro } from "../modelo/Livro";

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
    _id?: string;
    codEditora?: number;
    titulo?: string;
    resumo?: string;
    autores?: string[];
}

export class ControleLivro {
    async obterLivros() {
        const res = await fetch(baseURL);
        const data = await (res.json() as Promise<LivroMongo[]>);
        return data.map((livro) => new Livro(livro._id, livro.codEditora, livro.titulo, livro.resumo, livro.autores));
    }

    async incluir(livro: Livro) {
        const { codEditora, titulo, resumo, autores } = livro;
        const mongoLivro: LivroMongo = {
            codEditora,
            titulo,
            resumo,
            autores
        };
        const res = await fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(mongoLivro),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.ok;
    }

    async excluir(codigo: string) {
        const res = await fetch(`${baseURL}/${codigo}`, {
            method: 'DELETE'
        })
        return res.ok;
    }
}
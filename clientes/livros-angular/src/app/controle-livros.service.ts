import { Injectable } from '@angular/core';
import { Livro, LivroMongo } from './livro';

const baseURL = 'http://localhost:3030/livros';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  async obterLivros() {
    const res = await fetch(baseURL);
    const data = await (res.json() as Promise<LivroMongo[]>);
    return data.map(
      (livro) =>
        new Livro(
          livro._id,
          livro.codEditora,
          livro.titulo,
          livro.resumo,
          livro.autores
        )
    );
  }

  async incluir(livro: Livro) {
    const { codEditora, titulo, resumo, autores } = livro;
    const livroMongo: LivroMongo = {
      codEditora,
      titulo,
      resumo,
      autores,
    };
    const res = await fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(livroMongo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res.ok;
  }

  async excluir(codigo: string) {
    const res = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE',
    });
    return res.ok;
  }
}

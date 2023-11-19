"use client";
import { ControleLivro } from "@/classes/controle/ControleLivros";
import { Livro } from "@/classes/modelo/Livro";
import { LinhaLivro } from "@/components/LinhaLivro";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const controleLivros = new ControleLivro();

const LivroLista: NextPage = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  const excluir = (codigo?: string) => {
    if (!codigo) return;
    controleLivros.excluir(codigo).then(() => setCarregado(false));
  };

  useEffect(() => {
    controleLivros.obterLivros().then((livros) => {
      setLivros(livros);
      setCarregado(true);
    });
  }, [carregado]);

  return (
    <div>
      <h1>Catálogo de Livros</h1>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Resumo</th>
            <th scope="col">Editora</th>
            <th scope="col">Autores</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {livros?.map((livro, index) => (
            <LinhaLivro livro={livro} excluir={excluir} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LivroLista;

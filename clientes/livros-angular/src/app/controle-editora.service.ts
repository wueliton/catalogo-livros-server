import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  #editoras: Editora[] = [{
    codEditora: 1,
    nome: "Editora 1"
  }];

  constructor() { }

  getNomeEditora(codEditora: number) {
    const editorasFiltradas = this.#editoras.filter((editora) => editora.codEditora === codEditora);
    return editorasFiltradas.at(0)?.nome ?? '';
  }

  getEditoras() {
    return this.#editoras;
  }
}

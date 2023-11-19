import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro();
  autoresForm: string = '';
  editoras: Editora[] = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.editoras = this.servEditora.getEditoras();
    const editora = this.editoras.at(0)?.codEditora;
    if (!editora) return;
    this.livro.codEditora = editora;
  }

  incluir = () => {
    const updatedLivro: Livro = {
      ...this.livro,
      autores: this.autoresForm.split(/\r?\n|\r|\n/g),
    };
    this.servLivros
      .incluir(updatedLivro)
      .then(() => this.router.navigateByUrl('/lista'));
  };
}

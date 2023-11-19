import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "lista",
    loadComponent: () => import("./livro-lista/livro-lista.component").then((m) => m.LivroListaComponent)
  },
  {
    path: "dados",
    loadComponent: () => import("./livro-dados/livro-dados.component").then((m) => m.LivroDadosComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

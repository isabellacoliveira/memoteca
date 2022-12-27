import { ListarPensamentoComponent } from './componentes/pensamento/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './componentes/pensamento/criar-pensamento/criar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// vamos usar essa constante
// serão um array pois serao varias rotas
// cada uma tera um objeto diferente
const routes: Routes = [
  {
    path: '',
    // vamos fazer um redirecionamento
    redirectTo: 'listarPensamento',
    // sempre que criamos um path com caminho vazio
    // precisamos adicionar
    // o full é para considerar toda a url
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

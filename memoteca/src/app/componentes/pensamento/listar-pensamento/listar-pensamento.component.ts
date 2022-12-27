import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamento: Pensamento[] = []
  // essa lista receberá dados do back-end
  constructor () { }
  ngOninit(): void {

  }
}

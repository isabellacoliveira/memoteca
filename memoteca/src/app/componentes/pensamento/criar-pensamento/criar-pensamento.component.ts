import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
  // vamos criar um atributo que se chama pensamento
  // ele vai ser um objeto de propriedades
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo angular',
    autoria: 'Dev',
    modelo: ''
  }
  constructor() { }

  ngOnInit(): void {

  }

  criarPensamento(){
    alert('novo pensamento criado')
  }

  cancelarPensamento(){
    alert('pensamento cancelado')
  }
}

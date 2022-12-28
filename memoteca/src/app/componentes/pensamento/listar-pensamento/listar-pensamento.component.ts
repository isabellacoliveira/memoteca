import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamento: Pensamento[] = []
  constructor (private service: PensamentoService) { }

  ngOnInit(): void {
    // precisamos informar aqui que queremos informações sobre determinada coisa
    // agora o angular foi notificado que deveremos receber notificações quando houver uma mudança
    this.service.listar().subscribe((listaPensamento) => {
      // o this.listaPensamento é a lista que temos aqui e estamos dizendo
      // que ela vai receber a lista que tem la nas services
      this.listaPensamento = listaPensamento
    })
  }
}

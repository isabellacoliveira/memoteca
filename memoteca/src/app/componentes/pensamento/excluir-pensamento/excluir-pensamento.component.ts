import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    // classe que fornece informações sobre as rotas e caminhos
    private route: ActivatedRoute
    ){   }

      ngOnInit(): void {
        // o snapshot faz uma captura instantanea da rota no momento em que ela foi acessada
        // o paramMap nos traz um mapa com as informações, e parametros obrigatorios e opcionais
        //  daquele pensamento
        // assim conseguimos obter o id do pensamento
        const id  = this.route.snapshot.paramMap.get('id')
        this.service.buscaPorId(parseInt(id!)).subscribe((pensamento) => {
          this.pensamento = pensamento
        })
      }

      excluirPensamento(){
          if(this.pensamento.id){
            this.service.excluir(this.pensamento.id).subscribe(() => {
            this.router.navigate(['/listarPensamento'])
          })
        }
      }

      cancelar(){
        this.router.navigate(['/listarPensamento'])
      }
}

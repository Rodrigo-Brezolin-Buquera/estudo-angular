import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-lista-pensamento',
  templateUrl: './lista-pensamento.component.html',
  styleUrls: ['./lista-pensamento.component.css']
})

export class ListaPensamentoComponent implements OnInit {

  listaPensamentos:Pensamento[] = []

  constructor(private service: PensamentoService){ }
 

  ngOnInit():void {
    this.service.listar()
  }
}

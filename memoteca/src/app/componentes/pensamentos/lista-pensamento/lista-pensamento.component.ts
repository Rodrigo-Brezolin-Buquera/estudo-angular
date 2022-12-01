import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-lista-pensamento',
  templateUrl: './lista-pensamento.component.html',
  styleUrls: ['./lista-pensamento.component.css']
})
export class ListaPensamentoComponent {

  listaPensamentos:Pensamento[] = []

}

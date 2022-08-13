import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-detalles',
  templateUrl: './cliente-detalles.component.html',
  styleUrls: ['./cliente-detalles.component.css']
})
export class ClienteDetallesComponent implements OnInit {

	@Input() cliente?:Cliente;
	constructor() { }
	ngOnInit(): void {
	}

}

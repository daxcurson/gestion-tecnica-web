import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './mock-clientes';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
	constructor(private messageService: MessageService){}
	getClientes():Observable<Cliente[]>{
		const clientes=of(CLIENTES);
		this.messageService.add('ClienteService: leyendo clientes');
		return clientes;
	}
}

import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Clientes} from '../../models/clientes';
import {ClienteService} from '../../services/cliente.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  
  public clientes:Clientes;

  constructor(private clienteService:ClienteService) {
    this.clientes=new Clientes('','','',0,'','','','','',0,'')
   }

  ngOnInit(): void {
  }

  Registrar(){
    this.clienteService.RegistrarCliente(this.clientes).subscribe(
      (res:any)=>{
        /*console.log(res);
        if(res.statusCode != 200){
          alert('No se pudo registrar el usuario');
        }else{
          alert('Registro exitoso');
        }*/
        alert('registro exitoso')
      },(error)=>{
        var errorMensaje=<any>error;
        if(errorMensaje!= null){
          console.log(error)
          alert('error ver consola')
        }
      }
      
    )
  }

  click(){
    alert('click');
  }

}

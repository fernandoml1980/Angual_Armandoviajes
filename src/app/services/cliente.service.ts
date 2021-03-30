import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiURL='http://localhost:3000';

  constructor(private _http:HttpClient ){ }

  RegistrarCliente(costumerParam):Observable<any>{
    let params = JSON.stringify(costumerParam);
    let options = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.post(this.apiURL+"/clientes/crear",params,{headers:options}).pipe((res)=>res);
  }

}

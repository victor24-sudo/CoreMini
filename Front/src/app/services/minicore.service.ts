import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const base_url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MinicoreService {

  constructor(private http: HttpClient) { }

  getClientes(){
    const url = `${base_url}/clientes`;
    return this.http.get(url);
  }

  getContratos(){
    const url = `${base_url}/contratos`;
    return this.http.get(url);
  }

  generarReporte(fechaIni: any, fechaFin:any){
    return this.http.post(`${base_url}/report`,{
      fecha1:fechaIni,fecha2:fechaFin
    });
  }
}

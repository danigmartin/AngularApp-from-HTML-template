import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-archivo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) { 
    this.http.get('assets/data/data-page.json').subscribe(
      (resp: InfoPagina) => {
        
        this.cargada = true;
        this.info = resp;

        console.log(this.info.email);
      }
    )

  }
}

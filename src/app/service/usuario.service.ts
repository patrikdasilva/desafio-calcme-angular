import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';



const baseUrl = 'http://localhost:8080/api/usuarios'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  listarUsuarios() {
    return this.http.get<Usuario[]>(`${baseUrl}/list`)
  }
}

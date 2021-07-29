import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarios: Usuario[] | undefined;

  usuario: Usuario = {
    nome: '',
    email: '',
    telefone: ''
  };
  submitted = false;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.listarUsuarios()
    .subscribe(response =>
      this.usuarios = response);

  }

  saveUsuario(): void {
    if (this.usuario.nome != "" || this.usuario.email != "" || this.usuario.telefone != "") {
      const data = {
        nome: this.usuario.nome,
        email: this.usuario.email,
        telefone: this.usuario.telefone
      };
      this.usuarioService.create(data)
        .subscribe(
          response => {
            alert("Usuário salvo com sucesso!")
            console.log(response)
            this.submitted = false;
          },
          error => {
            console.log(error);
          }
        );
    } else {
      alert('Preencha todos os campos.')
    }
  }

  getUsuarios() {
    this.usuarioService.listarUsuarios()
      .subscribe(response => {
        this.usuarios = response;
      },
        error => {
          console.log(error)
        }
      );
  }
}



import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any;
  nombreUsuario: string = "";
  emailUsuario: string = "";
  apellidoUsuario: string = '';
  carreraUsuario: string = '';
  regionUsuario: string = '';
  ciudadUsuario: string = '';
  comunaUsuario: string = '';

  constructor(private storage: StorageService, private auth: AngularFireAuth) { }

  ngOnInit() {
    this.cargarUsuario();
  }

  async cargarUsuario() {
    const user = await this.auth.currentUser;
    const usuarios = await this.storage.obtenerUsuario();

    if (user && usuarios) {
      this.usuario = usuarios.find((u: any) => u.correo === user.email);
      if (this.usuario) {
        this.nombreUsuario = this.usuario.nombre;
        this.emailUsuario = this.usuario.correo;
        this.apellidoUsuario = this.usuario.apellido;
        this.carreraUsuario = this.usuario.carrera;
        this.regionUsuario = this.usuario.region;
        this.ciudadUsuario = this.usuario.ciudad;
        this.comunaUsuario = this.usuario.comuna;
      }
    }
  }
}

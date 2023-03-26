import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../../usuarios/usuarios.service';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public usuarioService: UsuariosService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  signUp(email: IonInput, password: IonInput) {
    if (email.value !== '' && password.value !== '') {
      this.usuarioService.registerUser(email.value!.toString(), password.value!.toString())
        .then((res: any) => {
          this.usuarioService.verificationEmail();
          this.router.navigate(['verified']);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
      window.alert("Todos los campos son obligatorios :c")
    }
  }

}

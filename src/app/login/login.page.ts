import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public usuariosService: UsuariosService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  login(email: IonInput, password: IonInput) {
    if (email.value !== '' && password.value !== '') {
      this.usuariosService.signIn(email.value!.toString(), password.value!.toString())
        .then((res: any) => {
          if (this.usuariosService.isEmailVerified) {
            this.router.navigate(['home']);
            return true;
          } else {
            window.alert('Correo no verificado');
            return false
          }
        }).catch((err: any) => {
          window.alert('Error Message: ' + this.usuariosService.getErrors(err.message));
        })
    } else {
      window.alert('Los campos son obligatorios')
    }
  }

}

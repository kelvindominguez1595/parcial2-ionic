import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../../usuarios/usuarios.service';

@Component({
  selector: 'app-verifiedemail',
  templateUrl: './verifiedemail.page.html',
  styleUrls: ['./verifiedemail.page.scss'],
})
export class VerifiedemailPage implements OnInit {

  constructor(public usuarioService: UsuariosService) { }

  ngOnInit() {
  }

}

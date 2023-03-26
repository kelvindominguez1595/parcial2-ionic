import { ProductosService } from './../productos/productos.service';
import { ProductosProps } from './../productos/productos.d';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  productos: ProductosProps[] = [];
  constructor(
    public usuariosService: UsuariosService,
    public productosService: ProductosService
  ) { }

  ngOnInit() {
    this.obtenerListaa();
  }

  obtenerListaa() {
    let response = this.productosService.obtenerProducto();
    response.snapshotChanges().subscribe((res: any) => {
      this.productos = [];
      res.forEach((item: any) => {
        let a = item.payload.toJSON();
        a['uid'] = item.key;
        this.productos.push(a as ProductosProps);
      });
    })
  }

  borrarProductos(id: string) {
    this.productosService.borrarProducto(id);
  }

  openPDF() {

  }

}

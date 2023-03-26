import { Router } from '@angular/router';
import { ProductosService } from './productos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CategoriasProps } from '../categorias/Categorias';
import { CategoriasService } from '../categorias/categorias.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productosForm: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    categoria_id: new FormControl(''),
    cantidad: new FormControl(''),
    precio: new FormControl(''),
  });
  categorias: CategoriasProps[] = [];
  constructor(
    private productosServices: ProductosService,
    private categoriaService: CategoriasService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getCategoriasList();
    this.productosForm = this.fb.group({
      nombre: [''],
      description: [''],
      image: [''],
      categoria_id: [''],
      cantidad: [''],
      precio: [''],
    })
  }

  formSubmit() {
    if (!this.productosForm.valid) {
      return false;
    } else {
      this.productosServices.crearProducto(this.productosForm.value)
        .then((res: any) => {
          console.log(res);
          this.productosForm.reset();
          this.router.navigate(['/home']);
        })
        .catch((err: any) => {
          console.log(err);
        })
      return true;
    }
  }

  getCategoriasList() {
    let response = this.categoriaService.obtenerCategorias();
    response.snapshotChanges().subscribe((res: any) => {
      this.categorias = [];
      res.forEach((item: any) => {
        let a = item.payload.toJSON();
        a['uid'] = item.key;
        this.categorias.push(a as CategoriasProps);
      });
    })
  }
}

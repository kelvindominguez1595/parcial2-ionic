import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasProps } from 'src/app/categorias/Categorias';
import { CategoriasService } from 'src/app/categorias/categorias.service';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  productosForm: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    categoria_id: new FormControl(''),
    cantidad: new FormControl(''),
    precio: new FormControl(''),
  });
  categorias: CategoriasProps[] = [];
  id: string = '';

  constructor(
    private productosServices: ProductosService,
    private categoriaService: CategoriasService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.activateRoute.snapshot.paramMap.get('productoid')!;
    this.productosServices.obtenerProductos(this.id).valueChanges().subscribe((res: any) => {
      this.productosForm.setValue(res);
    });

  }

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
      this.productosServices.actualizarProducto(this.id, this.productosForm.value)
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

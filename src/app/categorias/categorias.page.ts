import { CategoriasService } from './categorias.service';
import { Component, OnInit } from '@angular/core';
import { CategoriasProps } from './Categorias';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  categorias: CategoriasProps[] = [];
  constructor(private categoriaService: CategoriasService) { }

  ngOnInit() {
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

  fetchCategoriasList() {
    this.categoriaService.obtenerCategorias().valueChanges().subscribe((res: any) => {
      console.log(res);

    })
  }
  borrarCategoria(id: string) {
    this.categoriaService.borrarCategoria(id);
  }

}

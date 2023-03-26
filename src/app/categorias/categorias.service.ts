import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { CategoriasProps } from './Categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasListRef!: AngularFireList<any>;
  categoriasRef!: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }
  // guardar
  crearCategoria(data: CategoriasProps) {
    this.categoriasListRef = this.db.list('/categoria');
    return this.categoriasListRef.push({
      nombrecategoria: data.nombrecategoria
    })
  }
  obtenerCategorias() {
    this.categoriasListRef = this.db.list('/categoria');
    return this.categoriasListRef;
  }
  obtenerCategoria(id: string) {
    this.categoriasRef = this.db.object('/categoria/' + id);
    return this.categoriasRef;
  }
  actualizarCategoria(id: string, data: CategoriasProps) {
    return this.categoriasRef.update({ nombrecategoria: data.nombrecategoria });
  }
  borrarCategoria(id: string) {
    this.categoriasRef = this.db.object('/categoria/' + id)
    this.categoriasRef.remove();
  }
}

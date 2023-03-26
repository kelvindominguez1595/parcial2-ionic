import { ProductosProps } from './productos.d';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productosListRef!: AngularFireList<any>;
  productosRef!: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  crearProducto(data: ProductosProps) {
    this.productosListRef = this.db.list('/producto');
    return this.productosListRef.push({
      nombre: data.nombre,
      description: data.description,
      image: data.image,
      categoria_id: data.categoria_id,
      cantidad: data.cantidad,
      precio: data.precio,
    });
  }

  obtenerProducto() {
    this.productosListRef = this.db.list('/producto');
    return this.productosListRef;
  }

  obtenerProductos(id: string) {
    this.productosRef = this.db.object('/producto/' + id);
    return this.productosRef;
  }

  actualizarProducto(id: string, data: ProductosProps) {
    return this.productosRef.update({
      nombre: data.nombre,
      description: data.description,
      image: data.image,
      categoria_id: data.categoria_id,
      cantidad: data.cantidad,
      precio: data.precio,
    });
  }

  borrarProducto(id: string) {
    this.productosRef = this.db.object('/producto/' + id);
    this.productosRef.remove();
  }
}

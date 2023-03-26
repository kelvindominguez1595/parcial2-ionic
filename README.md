# Parcial 2
Proyecto realizado con información de diversos sitios electrónicos para dar solución al proyecto; esta realizado con IONIC 6 y Angular 15.
## Configuraciones 
Puede utilizar npm o yarn
```bash
npm install
```
## Solución de error con configuración de firebase angular 15 
Estas interfaces le hacen falta tipar la respuesta en tipados genéricos nada más están diciendo que la interfaz es tipado genérico, pero no su extensión así que se deben de tipar (OJO ESTO SOLO PASA CON ANGULAR 15, el tutorial trabajo en angular 8 y el tipado no era tan estricto)

```typescript
export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot
export interface QueryDocumentSnapshot<T> extends firebase.firestore.QueryDocumentSnapshot
export interface QuerySnapshot<T> extends firebase.firestore.QuerySnapshot
export interface DocumentChange<T> extends firebase.firestore.DocumentChange 
```
Como debería de quedar al tipar de manera genérica las extensiones
```typescript
export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot<T>
export interface QueryDocumentSnapshot<T> extends firebase.firestore.QueryDocumentSnapshot<T>
export interface QuerySnapshot<T> extends firebase.firestore.QuerySnapshot<T>
export interface DocumentChange<T> extends firebase.firestore.DocumentChange<T>
```
## Recursos o sitio de donde se encontró la información
- [How to Build Ionic 6 Firebase CRUD App with Angular](https://www.positronx.io/build-ionic-firebase-crud-app-with-angular/)
- [How to Add Firebase Authentication in Ionic 6 Angular](https://www.positronx.io/ionic-firebase-authentication-tutorial-with-examples/)
## Errores en integraciones de paquetes
- Paquete npm **PdfMake**: este paquete no se pudo integrar ya que según información de su propio repositorio hay un problema con angular 15 que aún no se ha logrado solventar y por ende este si se puede instalar, pero no se pueda usar ya que no se hace linkeo del paquete en el lugar de uso aparte que no está tipado y puede ser este un posible error.
- Paquete npm **Pdf Viewer**: como con el paquete anterior este tiene serios problemas trabajar en la última versión de angular y por ende no se integró.

## Punto Cumplidos
- Crear método de autenticación se utilizó Firebase auth con autentificación con correo y contraseña
- Se creo navegación de los mantenimientos de los productos y categorías (CRUD)
- Validaciones de los campos todos los campos son obligatorios no deben ir vacíos.
## Puntos no cumplidos
- Integración de la paginación
- integración de reportes PDf
# Observaciones
- Si es de conocedores angular es un lenguaje potente pero aun inestable en ciertos puntos de integraciones de paquetes con versiones resientes hay mucha incompatibilidad y genera muchos problemas ir a configurar archivos de la carpeta node_module ya que esto no debería hacerse a comparación con otros proyectos que usan paquetes npm o yarn que ya dejaron estos problemas atrás en sus actualizaciones se habla de react, vue... entre otros.
- Se necesita conocimientos fuertes en **TypeScript** o por lo menos conocer el tipado de otros lenguajes como Java, C# u otros ya que caso contrario la ruta de aprendizaje se hace aun mayor y menos llamativa para los que deseen aprender.

## License

[MIT](https://choosealicense.com/licenses/mit/)

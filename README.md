
# Parcial 2

Proyecto realizado con informacion de diversos sitio electronicos para dar solucion al proyecto; esta realizado con IONIC 6 y Angular 15.

## Configuraciones 

Puede utilizar npm o yarn

```bash
npm i firebase
```

## Solucion de error con configuracion de firebase angular 15 
Esta interfaces le hace falta tipar las respuesta en tipados genericos nada mas estan diciendo que la interface es tipado generico pero no su extension asi que se deben de tinar (OJO ESTO SOLO PASA CON ANGULAR 15, el tutorial trabajo en angular 8 y el tipado no era tan extricto)

```typescript
export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot
export interface QueryDocumentSnapshot<T> extends firebase.firestore.QueryDocumentSnapshot
export interface QuerySnapshot<T> extends firebase.firestore.QuerySnapshot
export interface DocumentChange<T> extends firebase.firestore.DocumentChange 
```
Como deberia de quedar al tipar de manera generica las extenciones
```typescript
export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot<T>
export interface QueryDocumentSnapshot<T> extends firebase.firestore.QueryDocumentSnapshot<T>
export interface QuerySnapshot<T> extends firebase.firestore.QuerySnapshot<T>
export interface DocumentChange<T> extends firebase.firestore.DocumentChange<T>
```
## Recuros o sitio de donde se encontro la información
- [How to Build Ionic 6 Firebase CRUD App with Angular](https://www.positronx.io/build-ionic-firebase-crud-app-with-angular/)
- [How to Add Firebase Authentication in Ionic 6 Angular](https://www.positronx.io/ionic-firebase-authentication-tutorial-with-examples/)
## Errores en integraciones de paquetes
- Paquete npm **PdfMake**: este paquete no se pudo integrar ya que segun informacion de su propio repositorio hay un problema con angular 15 que aun no se ha logrado solventar y por ende este si se puede instlar pero no se pueda usar ya que no se hace linkeo del paquete en el lugar de uso aparte que no esta tipado y puede ser este un posible error..
- Paquete npm **Pdf Viewer**: como con el paquete anterior este tiene serios problemas trabajar en la ultima version de angular y por ende no se integro.

## Punto Cumplidos
- Crear metodo de autenficiacion se utilizo Firebase auth con autentificacion con correo y contraseña
- Se creo navegacion de los mantenimientos de los productos y categorias (CRUD)
- Validaciones de los campos todos los campos son obligatorios no deben ir vacios.
## Puntos no cumplidos
- Integracion de la paginacio
- integracion de reportes PDf
# Observaciones
- Si es de conocedores angular es un lenguaje potente pero aun inestable en ciertos puntos de integraciones de paquetes con versiones resientes hay mucha incompatibilidad y genera muchos problemas ir a configurar archivos de la carpeta node_module ya que esto no deberia hacerse a comparacion con otros proyectos que usan paquetes npm o yarn que ya dejaron estos problemas atras en sus actualizaciones se habla de react, vue... entre otros.
- Se necesita conocimientos fuertes en **TypeScript** o por lo menos conocer el tipado de otros lenguajes como Java, C# u otros ya que caso contrario la ruta de aprendizaje se hace aun mayor y menos llamativa para los que deceen aprender.

## License

[MIT](https://choosealicense.com/licenses/mit/)

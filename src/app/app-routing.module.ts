import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'categorias',
    children: [
      {
        path: '',
        loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasPageModule)
      },
      {
        path: ':categoriaid',
        loadChildren: () => import('./categorias/editar/editar.module').then(m => m.EditarPageModule)
      },
    ]
  },
  {
    path: 'nuevo',
    loadChildren: () => import('./categorias/nuevo/nuevo.module').then(m => m.NuevoPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./login/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'verified',
    loadChildren: () => import('./login/verifiedemail/verifiedemail.module').then(m => m.VerifiedemailPageModule)
  },
  {
    path: 'productos',
    children: [
      {
        path: '',
        loadChildren: () => import('./productos/productos.module').then(m => m.ProductosPageModule)
      },
      {
        path: ':productoid',
        loadChildren: () => import('./productos/editar/editar.module').then(m => m.EditarPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

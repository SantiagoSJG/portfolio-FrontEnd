import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderModalComponent } from './header/header-modal/header-modal.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

// const routes: Routes = [
//   {path: 'inicio', component: MainComponent},
//   {path: 'header', component: HeaderComponent, children: [
//   {path: 'cambiar-foto', component: HeaderModalComponent}
//   ]}
// ];

// const routes: Routes = [
//   { path: '', component: MainComponent},
//   {path: 'header', component: HeaderComponent, children: [
//       { path: 'cambiar-foto', component: HeaderModalComponent }
//     ]
//   }
// ];

const routes: Routes = [
  {path: '', component: MainComponent, children:[
      {path: 'header/cambiar-foto', component: HeaderModalComponent}
  ]},
  {path:'modal', component: HeaderModalComponent}
  {path:'login', component: IniciarSesionComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

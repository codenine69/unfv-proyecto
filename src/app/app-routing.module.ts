import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './principal/pages/inicio/inicio.component';
import { DashboardComponent } from './principal/pages/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirecciona la ruta vacía al componente de inicio de sesión
  //{ path: 'login', component: LoginComponent }, // Agrega la ruta para el componente de inicio de sesión
  {
    path: '', component: AppComponent, children: [
      {
        path: '', component: InicioComponent, children: [
          { path: 'index', component: DashboardComponent },
          { path: 'register', component: RegisterComponent },
          { path: 'login', component: LoginComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

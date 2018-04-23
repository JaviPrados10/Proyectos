import{RouterModule,Routes}from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './usuario/usuario.component';

const APP_ROUTES: Routes=[
    {path:"",component:InicioComponent},
    {path:"usuario",component:UsuarioComponent},
]
export const routing = RouterModule.forRoot(APP_ROUTES);
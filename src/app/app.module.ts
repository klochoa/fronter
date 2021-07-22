import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NuestrasPlantasComponent } from './nuestras-plantas/nuestras-plantas.component';
import { FichaTecnicaComponent } from './ficha-tecnica/ficha-tecnica.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { AdminComponent } from './admin/admin.component';
import { PrincipalUsuarioComponent } from './principal-usuario/principal-usuario.component';
import { AgregarPlantaComponent } from './agregar-planta/agregar-planta.component';
import { RegistroSeguimientoComponent } from './registro-seguimiento/registro-seguimiento.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EstacionComponent } from './estacion/estacion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    NuestrasPlantasComponent,
    FichaTecnicaComponent,
    SeguimientoComponent,
    AdminComponent,
    PrincipalUsuarioComponent,
    AgregarPlantaComponent,
    RegistroSeguimientoComponent,
    EstacionComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '',component: InicioComponent },
  {path: 'MuestraPlantas',component: NuestrasPlantasComponent},
  {path: 'FichaTecnica', component: FichaTecnicaComponent},
  {path: 'Estacion', component: EstacionComponent},
  {path: 'Inicio', component: InicioComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

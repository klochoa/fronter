import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InicioComponent} from './inicio/inicio.component';
import {NuestrasPlantasComponent } from './nuestras-plantas/nuestras-plantas.component';
import {FichaTecnicaComponent} from './ficha-tecnica/ficha-tecnica.component';
import {EstacionComponent} from './estacion/estacion.component'; 

const routes: Routes = [
  {path: '',component: InicioComponent },
  
  {path: 'MuestraPlantas',component: NuestrasPlantasComponent},
  {path: 'FichaTecnica', component: FichaTecnicaComponent},
  {
    path: 'MuestraPlantas/FichaTecnica',
    children: [
      {
        path: '',component: FichaTecnicaComponent
        
      },
      {
        path: ":ingresoId",
        component: FichaTecnicaComponent

      }
    ]
  },
  {path: 'Estacion', component: EstacionComponent},
  {path: 'Inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

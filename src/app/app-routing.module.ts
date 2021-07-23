import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GraficaEjesComponent} from './grafica-ejes/grafica-ejes.component'
import {TemperaturaCComponent} from './temperatura-c/temperatura-c.component'
import {VariadorComponent} from './variador/variador.component'

const routes: Routes = [
  {
    path: '',
    redirectTo:'/monitoreo/vibracion',
    pathMatch:'full'
  },
  {
    path: 'monitoreo/vibracion', 
    component:GraficaEjesComponent
  },
  {
    path:'monitoreo/energia',
    component:VariadorComponent
  },
  {
    path: 'monitoreo/Temperatura',
    component:TemperaturaCComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

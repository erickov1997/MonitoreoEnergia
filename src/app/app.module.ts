import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficaEjesComponent } from './grafica-ejes/grafica-ejes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VariadorComponent } from './variador/variador.component';
import { TemperaturaCComponent } from './temperatura-c/temperatura-c.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from './sidenav/sidenav.component';
import {DemoMaterialModule } from './material-module';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    GraficaEjesComponent,
    NavbarComponent,
    VariadorComponent,
    TemperaturaCComponent,
    SidenavComponent
  ],
  imports: [
    NgxChartsModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    BrowserModule,
    MatSidenavModule,
    DemoMaterialModule,
    MatListModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { EditarComponent } from './editar/editar.component';
import { RecordarContraComponent } from './recordar-contra/recordar-contra.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { PrincipalComponent } from './principal/principal.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ContactenosComponent,
    EditarComponent,
    
    
    RecordarContraComponent,
    GaleriaComponent,
    ProductosComponent,
    RegistrarComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

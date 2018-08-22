import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from '../principal/principal.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ContactenosComponent } from '../contactenos/contactenos.component';
import { EditarComponent } from '../editar/editar.component';
import { GaleriaComponent } from '../galeria/galeria.component';
import { LoginComponent } from '../login/login.component';
import { ProductosComponent } from '../productos/productos.component';

LoginComponent



const routes: Routes = [
{path:'', component: PrincipalComponent},
{path:'dashboard', component: DashboardComponent},
{path:'contactenos', component: ContactenosComponent},
{path:'productos', component: ProductosComponent},
{path:'editar', component: EditarComponent},
{path:'galeria', component: GaleriaComponent},
{path:'login', component: LoginComponent},
{path:'principal', component: PrincipalComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

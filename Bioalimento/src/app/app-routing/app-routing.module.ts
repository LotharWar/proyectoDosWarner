import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { ContactenosComponent } from '../contactenos/contactenos.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EditarComponent } from '../editar/editar.component';
import { PrincipalComponent } from '../principal/principal.component';


const routes: Routes = [
{path:'', component: PrincipalComponent},
{path:'Dashboard', component: DashboardComponent},
{path:'principal', component: PrincipalComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

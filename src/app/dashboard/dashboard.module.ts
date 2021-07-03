import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PlantillasComponent } from './components/plantillas/plantillas.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

@NgModule({
  declarations: [
    PageDashboardComponent,
    PlantillasComponent,
    PedidosComponent,
    CategoriasComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}

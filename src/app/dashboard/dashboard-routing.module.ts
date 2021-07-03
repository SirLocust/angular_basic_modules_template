import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { PlantillasComponent } from './components/plantillas/plantillas.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PageDashboardComponent,
    children: [
      {
        path: 'plantillas',
        component: PlantillasComponent,
      },
      {
        path: 'pedidos',
        component: PedidosComponent,
      },
      {
        path: 'categorias',
        component: CategoriasComponent,
      },
      {
        path: '**',
        redirectTo: '/dashboard/pedidos',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

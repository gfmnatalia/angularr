import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaDetailComponent } from './categorias/categoria-detail/categoria-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes = RouterModule.forRoot ([
    { path: 'categorias', component: CategoriasComponent },
    { path: 'categorias/:id', component: CategoriaDetailComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
  ]);

@NgModule({
    declarations: [],
    imports: [ CommonModule, routes ],
    exports: [ RouterModule ],
    providers: [],
})
export class AppRoutingModule {}

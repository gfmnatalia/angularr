import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ROUTES } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaDetailComponent } from './categorias/categoria-detail/categoria-detail.component';
import { CategoriaService } from './categorias/shared/categoria.service';




const routes = RouterModule.forRoot ([
  { path: 'categorias', component: CategoriasComponent },
  { path: 'categorias/:id', component: CategoriaDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
]);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriasComponent,
    CategoriaDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  providers: [CategoriaService],
  bootstrap: [AppComponent]
})


export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ROUTES } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaDetailComponent } from './categorias/categoria-detail/categoria-detail.component';

const routes = RouterModule.forRoot ([
  { path: 'categorias', component: CategoriasComponent }
]);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriasComponent,
    CategoriaDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

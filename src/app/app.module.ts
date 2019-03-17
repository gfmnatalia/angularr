import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaDetailComponent } from './categorias/categoria-detail/categoria-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriasComponent,
    CategoriaDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

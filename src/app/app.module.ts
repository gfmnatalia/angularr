import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from "./navbar/navbar.component"
import { CategoriaComponent } from './categorias/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriaComponent    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

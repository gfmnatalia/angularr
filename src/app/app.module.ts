import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaDetailComponent } from './categorias/categoria-detail/categoria-detail.component';

import { CategoriaService } from './categorias/shared/categoria.service';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryCategoriaDataService } from './in-memory-categoria-data.service';



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
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryCategoriaDataService, {apiBase: 'memApi'})
  ],
  providers: [CategoriaService],
  bootstrap: [AppComponent]
})


export class AppModule { }

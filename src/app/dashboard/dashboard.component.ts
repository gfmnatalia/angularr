import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../categorias/shared/categoria.service';
import { Categoria } from '../categorias/shared/categoria.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    categorias: Categoria[];

    constructor(private categoriaService: CategoriaService) {
    }

    ngOnInit(): void {
        this.categoriaService.getMainCategorias()
            .then((categorias) => this.categorias = categorias);
    }
}

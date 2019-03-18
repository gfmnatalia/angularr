import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Categoria } from '../shared/categoria.model';
import { CategoriaService } from '../shared/categoria.service';


@Component({
    selector: 'app-categoria-detail',
    templateUrl: './categoria-detail.component.html',
    providers: []
})
export class CategoriaDetailComponent implements OnInit {

    categoria: Categoria;
    constructor(
        private categoriaService: CategoriaService,
        private route: ActivatedRoute,
        private location: Location
        ) { }

    public ngOnInit() {
        this.route.params
        .switchMap((params: Params) => this.categoriaService.getCategoria(+params['id']))
        .subscribe(categoria => this.categoria = categoria);
     }

    public goBack() {
        this.location.back();
    }
}

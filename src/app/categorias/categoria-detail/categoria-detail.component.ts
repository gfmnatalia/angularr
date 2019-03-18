import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Categoria } from '../shared/categoria.model';
import { CategoriaService } from '../shared/categoria.service';


@Component({
    selector: 'app-categoria-detail',
    templateUrl: './categoria-detail.component.html',
    providers: []
})
export class CategoriaDetailComponent implements OnInit {

    @Input()
    categoria: Categoria;
    constructor(
        private categoriaService: CategoriaService,
        private route: ActivatedRoute
        ) { }

    public ngOnInit() {
        this.route.params
        .switchMap((params: Params) => this.categoriaService.getCategoria(+params['id']))
        .subscribe(categoria => this.categoria = categoria);
     }
}

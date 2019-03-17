import { Component, OnInit, Input } from '@angular/core';

import { Categoria } from '../shared/categoria.model';

@Component({
    selector: 'app-categoria-detail',
    templateUrl: './categoria-detail.component.html',
})
export class CategoriaDetailComponent implements OnInit {

    @Input()
    categoria: Categoria;

    constructor() {
     }

    ngOnInit(): void { }

}

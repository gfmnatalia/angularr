import { Component, OnInit} from '@angular/core'
import { Categoria } from './shared/categoria.model';

const CATEGORIAS: Array<Categoria> = [
    { id: 1, nome: 'Eletronicos' }, 
    { id: 2, nome: 'Higiene' }, 
    { id: 3, nome: 'Cama/Mesa/Banho' }, 
    { id: 4, nome: 'Eletrodomesticos' }, 
    { id: 5, nome: 'Roupas' }, 
    { id: 6, nome: 'Acessorios' }
];


@Component ({
    selector: 'categorias',
    templateUrl: './categoria.component.html'
})

export class CategoriaComponent implements OnInit {
    public categorias;

    public constructor(){
    }

    public ngOnInit() {
        this.categorias = CATEGORIAS;
    }
}
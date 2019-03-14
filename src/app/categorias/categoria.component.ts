import { Component, OnInit} from '@angular/core'

const CATEGORIAS: Array<any> = [
    { id: 1, nome: 'Eletronicos' }, 
    { id: 2, nome: 'Higiene' }, 
    { id: 3, nome: 'Cama/Mesa/Banho' }, 
    { id: 4, nome: 'Eletrodomesticos' }, 
    { id: 5, nome: 'Roupas' }, 
    { id: 6, nome: 'Acessorios' }
];


@Component ({
    selector: 'categoria',
    templateUrl: './categoria.component.html'
})

export class CategoriaComponent implements OnInit {
    categorias: any[];

    constructor(){
    }

    ngOnInit() {
        this.categorias = CATEGORIAS;
    }
}
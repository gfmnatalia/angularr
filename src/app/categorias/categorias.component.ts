import { Component, OnInit} from '@angular/core';
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
    selector: 'app-categorias',
    templateUrl: './categorias.component.html'
})

export class CategoriasComponent implements OnInit {
    public categorias: Categoria[];
    public categoriaSelecionada: Categoria;

    public constructor() {
    }

    public ngOnInit() {
        this.categorias = CATEGORIAS;
    }

   public onClick(categoria: Categoria): void {
    this.categoriaSelecionada = categoria;
   }
}

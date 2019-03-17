import { Injectable } from '@angular/core';
import { Categoria } from './categoria.model';

const CATEGORIAS: Array<Categoria> = [
    { id: 1, nome: 'Eletronicos' },
    { id: 2, nome: 'Higiene' },
    { id: 3, nome: 'Cama/Mesa/Banho' },
    { id: 4, nome: 'Eletrodomesticos' },
    { id: 5, nome: 'Roupas' },
    { id: 6, nome: 'Acessorios' }
];

@Injectable()
export class CategoriaService {

getCategorias(): Array<Categoria> {
    return CATEGORIAS;
    }
}

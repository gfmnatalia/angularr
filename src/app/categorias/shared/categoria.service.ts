import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Categoria } from './categoria.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


const CATEGORIAS: Categoria[] = [
    { id: 1, nome: 'Eletronicos' },
    { id: 2, nome: 'Higiene' },
    { id: 3, nome: 'Cama/Mesa/Banho' },
    { id: 4, nome: 'Eletrodomesticos' },
    { id: 5, nome: 'Roupas' },
    { id: 6, nome: 'Acessorios' }
];

@Injectable()
export class CategoriaService {
    public constructor(private http: Http){}

    getCategorias(): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            if (CATEGORIAS.length > 0) {
                resolve(CATEGORIAS);
            }else {
                const error_msg = 'Não há tarefas';
                reject(error_msg);
            }
        });
        return promise;
    }

    getMainCategorias(): Promise<any> {
        return Promise.resolve(CATEGORIAS.slice(0, 3));
    }

    getCategoria(id: number): Promise<any> {
        return this.getCategorias()
            .then(categorias => categorias.find(categoria => categoria.id === id));
    }
}

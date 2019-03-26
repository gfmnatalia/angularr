import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryCategoriaDataService implements InMemoryDbService {

    createDb() {
        const categorias = [
            { id: 1, nome: 'Eletronicos' },
            { id: 2, nome: 'Higiene' },
            { id: 3, nome: 'Cama/Mesa/Banho' },
            { id: 4, nome: 'Eletrodomesticos' },
            { id: 5, nome: 'Roupas' },
            { id: 6, nome: 'Acessorios' }
        ];
        return { categorias };
    }
}

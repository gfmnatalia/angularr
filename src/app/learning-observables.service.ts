import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';




@Injectable()
export class LearningObservables {

    constructor(private http: Http) {

        // Criando um OBSERVER
        const observer = {
            name : 'Nome Qualquer',
            email: 'Email@qualquer',

            next: function(newData) {
                console.log('CHAMOU O METODO NEXT E PASSOU COMO PARAMETRO O newData => ', newData);
            },
            error: function(errorData) {
                console.log('CHAMOU O METODO ERROR E PASSOU COMO PARAMETRO O newData => ', errorData);
            },
            complete: function() {
                console.log('CHAMOU O METODO COMPLETE E ENCERROU');
            },
        };


        /* Criando um objeto observable
        this.http.get('memApi/categorias')
            .subscribe(observer);*/

        // Chamada GET usando Arrow Functions
        this.http.get('memApi/categoriass')
            .catch(this.handleError)
            .subscribe(
                newData => console.log('CHAMOU O METODO NEXT E PASSOU COMO PARAMETRO O newData => ', newData),
                errorData => console.log('CHAMOU O METODO ERROR E PASSOU COMO PARAMETRO O newData => ', errorData),
                () => console.log('CHAMOU O METODO COMPLETE E ENCERROU')
            );

        /* Utilizando apenas método NEXT do observable
        this.http.get('memApi/categorias')
            .subscribe(
                newData => console.log('CHAMOU O METODO NEXT E CHAMOU COMO PARAMETRO O newData => ', newData)
            );*/
    }

    public handleError(error: Response) {
        console.log('Salvando erro no banco de dados para DEV', error);
        return Observable.throw(error);
    }
}

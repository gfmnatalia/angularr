import { Component, OnInit} from '@angular/core';
import { Categoria } from './shared/categoria.model';
import { CategoriaService } from './shared/categoria.service';

@Component ({
    selector: 'app-categorias',
    templateUrl: './categorias.component.html'
})

export class CategoriasComponent implements OnInit {
    public categorias: any;
    public categoriaSelecionada: Categoria;

    public constructor(private categoriaService: CategoriaService) { }

    public ngOnInit() {
        this.categoriaService.getCategorias()
            .then((categorias) => this.categorias = categorias)
            .catch((error_message) => console.log(error_message));
    }

    public onClick(categoria: Categoria): void {
        this.categoriaSelecionada = categoria;
   }
}

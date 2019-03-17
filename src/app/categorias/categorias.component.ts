import { Component, OnInit} from '@angular/core';
import { Categoria } from './shared/categoria.model';
import { CategoriaService } from './shared/categoria.service';

@Component ({
    selector: 'app-categorias',
    templateUrl: './categorias.component.html',
    providers: [ CategoriaService ]
})

export class CategoriasComponent implements OnInit {
    public categorias: Array<Categoria>;
    public categoriaSelecionada: Categoria;
    

    public constructor(private categoriaService: CategoriaService) { }

    public ngOnInit() {
        this.categorias = this.categoriaService.getCategorias();
    }

   public onClick(categoria: Categoria): void {
    this.categoriaSelecionada = categoria;
   }
}

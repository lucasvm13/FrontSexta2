import { CategoriasService } from './categorias.service';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CategoriasPesquisaComponent } from './categorias-pesquisa/categorias-pesquisa.component';

import {InputTextModule} from 'primeng/inputtext';

import {ButtonModule} from 'primeng/button';

import {TableModule} from 'primeng/table';

import {TooltipModule} from 'primeng/tooltip';


@NgModule({
  declarations: [CategoriasPesquisaComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  exports: [
    CategoriasPesquisaComponent
  ],
  providers: [CategoriasService],
})
export class CategoriasModule { }

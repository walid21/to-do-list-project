import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeCompteurPipe } from './pipes/pipe-compteur.pipe';



@NgModule({
  declarations: [
  
    PipeCompteurPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipeCompteurPipe
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResultadoPage } from './resultado.page';
import { DppaService } from '../dppa.service';

const routes: Routes = [
  {
    path: '',
    component: ResultadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResultadoPage],
  providers: [DppaService]
})
export class ResultadoPageModule {}

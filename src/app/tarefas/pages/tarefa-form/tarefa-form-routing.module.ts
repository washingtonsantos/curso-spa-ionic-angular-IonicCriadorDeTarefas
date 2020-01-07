import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaFormPage } from './tarefa-form.component';

const routes: Routes = [
  {
    path: '',
    component: TarefaFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarefaFormPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'new',
        loadChildren: 'src/app/tarefas/pages/tarefa-form/tarefa-form.module#TarefaFormModule'
      },
      {
        path: 'edit/:id',
        loadChildren: 'src/app/tarefas/pages/tarefa-form/tarefa-form.module#TarefaFormModule'
      },
      {
        path: '',
        loadChildren: 'src/app/tarefas/pages/tarefas-list/tarefas-list.module#TarefasListPageModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TarefasListPageRoutingModule } from './tarefas-list-routing.module';
import { TarefasListPage } from './tarefas-list.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    TarefasListPageRoutingModule
  ],
  declarations: [TarefasListPage]
})
export class TarefasListPageModule {}

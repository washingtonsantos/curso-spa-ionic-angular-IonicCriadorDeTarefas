import { NgModule } from '@angular/core';
import { TarefasItemComponent } from './tarefas-item/tarefas-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TarefasItemComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TarefasItemComponent
  ]
})
export class ComponentsModule { }

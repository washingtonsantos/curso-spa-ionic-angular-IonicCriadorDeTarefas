import { NgModule } from '@angular/core';
import { TarefaFormPageRoutingModule } from './tarefa-form-routing.module';
import { TarefaFormPage } from './tarefa-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TarefaFormPageRoutingModule
  ],
  declarations: [TarefaFormPage]
})
export class TarefaFormModule {}

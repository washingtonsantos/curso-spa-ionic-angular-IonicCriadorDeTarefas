import { NgModule } from '@angular/core';

import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { EmailComponent } from 'src/app/shared/components/email/email.component';


@NgModule({
  declarations: [ ConfiguracoesComponent, UserFormComponent, EmailComponent ],
  imports: [
    SharedModule,
    ConfiguracoesRoutingModule
  ]
})
export class ConfiguracoesModule { }

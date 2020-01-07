import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { EmailComponent } from 'src/app/shared/components/email/email.component';

const routes: Routes = [
  { path: '', component: ConfiguracoesComponent },
  { path: 'user', component: UserFormComponent, canActivate: [AuthGuard]  },
  { path: 'feedback', component: EmailComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracoesRoutingModule { }

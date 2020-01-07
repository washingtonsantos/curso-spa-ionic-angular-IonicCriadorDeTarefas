import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'tarefas', loadChildren: './tarefas/tarefas.module#TarefasModule', canLoad: [AuthGuard] },
  // tslint:disable-next-line: max-line-length
  { path: 'politica-de-privacidade', loadChildren: 'src/app/pages/politica-de-privacidade/politica-de-privacidade.module#PoliticaDePrivacidadeModule', canLoad: [AuthGuard] },
  { path: 'configuracoes', loadChildren: 'src/app/pages/configuracoes/configuracoes.module#ConfiguracoesModule', canLoad: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

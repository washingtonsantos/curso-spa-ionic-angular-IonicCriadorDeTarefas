import { NgModule } from '@angular/core';
import { PoliticaDePrivacidadeRoutingModule } from './politica-de-privacidade-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PoliticaDePrivacidadeComponent } from './politica-de-privacidade/politica-de-privacidade.component';

@NgModule({
  declarations: [PoliticaDePrivacidadeComponent],
  imports: [
    SharedModule,
    PoliticaDePrivacidadeRoutingModule
  ]
})
export class PoliticaDePrivacidadeModule { }

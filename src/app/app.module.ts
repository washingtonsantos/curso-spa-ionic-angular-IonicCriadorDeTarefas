import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { EmailProvider } from './core/provider/email/email';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, SharedModule],
  bootstrap: [AppComponent],
  providers: [
    EmailComposer,
    {provide: ErrorHandler, useClass: ErrorHandler},
  EmailProvider,
  ]
})
export class AppModule {}

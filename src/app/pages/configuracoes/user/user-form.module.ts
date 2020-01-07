import { NgModule } from '@angular/core';
import { UserFormPageRoutingModule } from './user-form-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [UserFormComponent],
  imports: [
    SharedModule,
    UserFormPageRoutingModule
  ]
})
export class UserFormModule {}

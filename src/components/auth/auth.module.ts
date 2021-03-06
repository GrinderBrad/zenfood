import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@common/common.module';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AuthComponent]
})
export class AuthModule { }

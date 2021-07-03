import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageLoginComponent } from './page-login/page-login.component';

@NgModule({
  declarations: [PageLoginComponent],
  imports: [CommonModule, LoginRoutingModule],
  exports: [PageLoginComponent],
})
export class LoginModule {}

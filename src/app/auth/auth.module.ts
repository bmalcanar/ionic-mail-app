import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [LoginComponent, AuthComponent],
  imports: [CommonModule, AuthRoutingModule, IonicModule],
})
export class AuthModule {}

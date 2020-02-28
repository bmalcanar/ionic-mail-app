import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [InboxComponent],
  imports: [CommonModule, InboxRoutingModule, IonicModule],
})
export class InboxModule {}

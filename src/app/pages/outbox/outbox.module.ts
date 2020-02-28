import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutboxRoutingModule } from './outbox-routing.module';
import { OutboxComponent } from './outbox.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [OutboxComponent],
  imports: [CommonModule, OutboxRoutingModule, IonicModule],
})
export class OutboxModule {}

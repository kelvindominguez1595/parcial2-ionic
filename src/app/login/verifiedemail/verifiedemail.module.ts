import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifiedemailPageRoutingModule } from './verifiedemail-routing.module';

import { VerifiedemailPage } from './verifiedemail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifiedemailPageRoutingModule
  ],
  declarations: [VerifiedemailPage]
})
export class VerifiedemailPageModule {}

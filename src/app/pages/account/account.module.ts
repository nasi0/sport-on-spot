import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountRoutingModule } from './account-routing.module';

import { AccountComponent } from './account.component';
import { ProfileHeaderComponent } from '../../components/profile/header/header.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		AccountRoutingModule
	],
	declarations: [AccountComponent, ProfileHeaderComponent]
})
export class AccountModule {}

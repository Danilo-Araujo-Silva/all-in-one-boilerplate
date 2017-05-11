import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from "./user.component";
import {HeaderComponent} from "./header/header.component";
import {NavComponent} from "./nav/nav.component";
import {FooterComponent} from "./footer/footer.component";
import {DashBoardModule} from "./dashboard/dashboard.module";

@NgModule({
	imports: [
		CommonModule,
		UserRoutingModule,
		DashBoardModule
	],
	declarations: [
		UserComponent,
		HeaderComponent,
		NavComponent,
		FooterComponent
	],
	exports: [
	],
	bootstrap: [
		UserComponent
	]
})
export class UserModule {
}

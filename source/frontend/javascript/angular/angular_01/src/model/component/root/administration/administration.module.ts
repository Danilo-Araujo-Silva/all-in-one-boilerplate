import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdministrationRoutingModule} from './administration-routing.module';
import {AdministrationComponent} from "./administration.component";
import {HeaderComponent} from "./header/header.component";
import {NavComponent} from "./nav/nav.component";
import {FooterComponent} from "./footer/footer.component";
import {DashBoardModule} from "./dashboard/dashboard.module";

@NgModule({
	imports: [
		CommonModule,
		AdministrationRoutingModule,
		DashBoardModule
	],
	declarations: [
		AdministrationComponent,
		HeaderComponent,
		NavComponent,
		FooterComponent
	],
	exports: [
	],
	bootstrap: [
		AdministrationComponent
	]
})
export class AdministrationModule {
}

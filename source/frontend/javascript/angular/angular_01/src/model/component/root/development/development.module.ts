import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevelopmentRoutingModule} from './development-routing.module';
import {DevelopmentComponent} from "./development.component";
import {HeaderComponent} from "./header/header.component";
import {NavComponent} from "./nav/nav.component";
import {FooterComponent} from "./footer/footer.component";
import {DashBoardModule} from "./dashboard/dashboard.module";

@NgModule({
	imports: [
		CommonModule,
		DevelopmentRoutingModule,
		DashBoardModule
	],
	declarations: [
		DevelopmentComponent,
		HeaderComponent,
		NavComponent,
		FooterComponent
	],
	exports: [
	],
	bootstrap: [
		DevelopmentComponent
	]
})
export class DevelopmentModule {
}

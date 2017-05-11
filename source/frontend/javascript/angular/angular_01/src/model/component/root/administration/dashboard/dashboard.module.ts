import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashBoardRoutingModule} from './dashboard-routing.module';
import {DashBoardComponent} from "./dashboard.component";

@NgModule({
	imports: [
		CommonModule,
		DashBoardRoutingModule
	],
	declarations: [
		DashBoardComponent
	],
	exports: [
		DashBoardComponent
	],
	bootstrap: [
	]
})
export class DashBoardModule {
}

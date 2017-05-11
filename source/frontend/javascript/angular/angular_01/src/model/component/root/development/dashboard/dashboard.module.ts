import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {DashBoardRoutingModule} from './dashboard-routing.module';
import {DashBoardComponent} from "./dashboard.component";
import {AccordionModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		DashBoardRoutingModule,
		MaterialModule,
		AccordionModule
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

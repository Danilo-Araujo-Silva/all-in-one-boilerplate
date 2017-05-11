import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingRoutingModule} from './landing-routing.module';
import {LandingComponent} from "./landing.component";

@NgModule({
	imports: [
		CommonModule,
		LandingRoutingModule
	],
	declarations: [
		LandingComponent
	],
	exports: [
		LandingComponent
	],
	bootstrap: [
	]
})
export class LandingModule {
}

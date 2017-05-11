import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicRoutingModule} from './public-routing.module';
import {PublicComponent} from "./public.component";
import {LandingModule} from "./landing/landing.module";

@NgModule({
	imports: [
		CommonModule,
		PublicRoutingModule,
		LandingModule
	],
	declarations: [
		PublicComponent,
	],
	exports: [
	],
	bootstrap: [
		PublicComponent,
	]
})
export class PublicModule {
}

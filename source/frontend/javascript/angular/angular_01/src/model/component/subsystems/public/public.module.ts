import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicRoutingModule} from './public-routing.module';
import {PublicComponent} from "./public.component";
import {HeaderComponent} from "./header/header.component";
import {NavComponent} from "./nav/nav.component";
import {FooterComponent} from "./footer/footer.component";
import {LandingModule} from "./landing/landing.module";

@NgModule({
	imports: [
		CommonModule,
		PublicRoutingModule,
		LandingModule
	],
	declarations: [
		PublicComponent,
		HeaderComponent,
		NavComponent,
		FooterComponent
	],
	exports: [
	],
	bootstrap: [
		PublicComponent
	]
})
export class PublicModule {
}

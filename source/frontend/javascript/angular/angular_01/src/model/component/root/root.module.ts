import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
// import {
// 	Router,
// 	Event as RouterEvent,
// 	NavigationStart,
// 	NavigationEnd,
// 	NavigationCancel,
// 	NavigationError
//} from '@angular/router';

import {MaterialModule} from '@angular/material';

import {RootRoutingModule} from './root-routing.module';
import {RootComponent} from './root.component';

import {PublicModule} from './public/public.module';
import {UserModule} from "./user/user.module";
import {AdministrationModule} from './administration/administration.module';
import {DevelopmentModule} from './development/development.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RootRoutingModule,
		PublicModule,
		UserModule,
		AdministrationModule,
		DevelopmentModule
  ],
  declarations: [
  	RootComponent
  ],
  providers: [
  ],
	bootstrap: [
		RootComponent
	]
})
export class RootModule {
	// loading: boolean = true;
	//
	// constructor(private router: Router) {
	// 	router.events.subscribe((event: RouterEvent) => {
	// 		this.navigationInterceptor(event);
	// 	});
	// }
	//
	// navigationInterceptor(event: RouterEvent): void {
	// 	if (event instanceof NavigationStart) {
	// 		this.loading = true;
	// 	} else if (event instanceof NavigationEnd) {
	// 		setTimeout(() => this.loading = false, 1000);
	// 	} else if (event instanceof NavigationCancel) {
	// 		this.loading = false;
	// 	} else if (event instanceof NavigationError) {
	// 		this.loading = false;
	// 	}
	// }
}

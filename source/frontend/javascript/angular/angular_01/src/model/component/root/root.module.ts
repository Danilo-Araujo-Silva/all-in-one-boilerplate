import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {MaterialModule} from '@angular/material';

import {RootRoutingModule} from './root-routing.module';
import {RootComponent} from './root.component';

import {PublicModule} from './../subsystems/public/public.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RootRoutingModule,
		PublicModule,
  ],
  declarations: [
  	RootComponent,
  ],
  providers: [
  ],
	bootstrap: [
		RootComponent,
	]
})
export class RootModule {
}

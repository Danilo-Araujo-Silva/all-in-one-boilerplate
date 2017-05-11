import {NgModule }             from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';

const routes: Routes = [
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class RootRoutingModule {
	// constructor(private router: Router) {
	// 	for (var i = 0; i < this.router.config.length; i++) {
	// 		var routePath:string = this.router.config[i].path;
	// 		console.log(routePath);
	// 	}
	// }
}
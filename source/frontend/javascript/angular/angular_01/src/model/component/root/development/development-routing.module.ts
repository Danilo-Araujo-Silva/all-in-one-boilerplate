import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DevelopmentComponent} from "./development.component";
import {DashBoardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
	{
		path: 'development/dashboard',
		pathMatch: 'full',
		redirectTo: 'development'
	},
	{
		path: 'development',
		component: DevelopmentComponent,
		children: [
			{
				path : '',
				component: DashBoardComponent
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class DevelopmentRoutingModule {
}

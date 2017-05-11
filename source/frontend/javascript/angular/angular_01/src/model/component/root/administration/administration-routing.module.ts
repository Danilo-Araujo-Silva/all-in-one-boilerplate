import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdministrationComponent} from "./administration.component";
import {DashBoardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
	{
		path: 'administration/dashboard',
		pathMatch: 'full',
		redirectTo: 'administration'
	},
	{
		path: 'administration',
		component: AdministrationComponent,
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
export class AdministrationRoutingModule {
}

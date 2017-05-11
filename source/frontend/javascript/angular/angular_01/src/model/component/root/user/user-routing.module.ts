import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./user.component";
import {DashBoardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
	{
		path: 'user/dashboard',
		pathMatch: 'full',
		redirectTo: 'user'
	},
	{
		path: 'user',
		component: UserComponent,
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
export class UserRoutingModule {
}

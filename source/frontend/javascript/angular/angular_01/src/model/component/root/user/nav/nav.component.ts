import {Component, AfterViewInit} from '@angular/core';

declare var $:any;

@Component({
	moduleId: module.id,
	selector: 'nav',
	templateUrl: 'nav.component.html',
	styleUrls: ['nav.component.scss']
})
export class NavComponent implements AfterViewInit {
	ngAfterViewInit() {
		$(".button-collapse").sideNav();
	}
}
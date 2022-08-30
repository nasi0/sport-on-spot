import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

	constructor() { }

	ngOnInit() { }

	buttons = [
		{
			label: 'Create Loby',
			link: '/create-lobby'
		},
		{
			label: 'Create Team',
			link: '/create-team'
		},
		{
			label: 'Search for Opponent',
			link: '/search-opponent'
		},
		{
			label: 'My Profile',
			link: '/account'
		}
	]

}

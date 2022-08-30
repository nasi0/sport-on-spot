import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Team } from 'src/app/interfaces/Team';
import { ProfileService } from 'src/app/services/profile/profile.service';


@Component({
	selector: 'app-my-teams',
	templateUrl: './my-teams.component.html',
	styleUrls: ['./my-teams.component.scss'],
})
export class MyTeamsComponent implements OnInit {
	myTeams: any

	constructor(
		private profileService: ProfileService,
		private location: Location
	) { }

	ngOnInit() {
		this.profileService.getProfile().subscribe((profile) => {
			this.myTeams = profile.teams;
			console.log('My Teams');
			console.log(this.myTeams);
		});
	}

	goToCreateTeamPage() {
		this.location.go('create-team');
		this.location.forward();
	}
}

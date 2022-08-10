import { TeamsService } from './../../services/teams/teams.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Team } from 'src/app/interfaces/Team';


@Component({
	selector: 'app-my-teams',
	templateUrl: './my-teams.component.html',
	styleUrls: ['./my-teams.component.scss'],
})
export class MyTeamsComponent implements OnInit {
	myTeams: any
	currentProfileId = 'kach0';

	constructor(
		private teamsService: TeamsService,
		private location: Location
	) { }

	ngOnInit() {
		this.teamsService.getTeamByProfile(this.currentProfileId).subscribe((teams) => this.myTeams = teams);
	}

	goToCreateTeamPage() {
		this.location.go('create-team');
		this.location.forward();
	}
}

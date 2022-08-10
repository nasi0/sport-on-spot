import { TeamsService } from './../../services/teams/teams.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from './../../interfaces/profile';
import { Team } from './../../interfaces/Team';
import { generate } from 'rxjs';

@Component({
	selector: 'app-create-team',
	templateUrl: './create-team.component.html',
	styleUrls: ['./create-team.component.scss'],
})
export class CreateTeamComponent implements OnInit {

	currentProfile: Profile = {
		"id": "nasi0",
		"name": "Atanas Petrov",
		"profileImageUrl": "https://placebeard.it/168x168",
		"pastMatches": [
			"match-1",
			"match-2",
			"match-3"
		],
		"nextMatches": [],
		"teams": []
	}


	desiredSlots: Array<any> = new Array(4);
	selectedProfiles: Array<Profile> = [this.currentProfile];
	teamName: string;
	constructor(
		private teamsService: TeamsService,
	) { }

	ngOnInit() { }

	addNewSlot() {
		this.desiredSlots.push(undefined);
		console.log(this.desiredSlots);
	}

	selectProfile(selectedProfile: Profile) {
		this.selectedProfiles.push(selectedProfile);
		console.log(this.selectedProfiles);
	}

	deselectProfile(deselectedProfile: Profile) {
		this.selectedProfiles = this.selectedProfiles.filter(function (profile) { return profile.id != deselectedProfile.id; });
		console.log(this.selectedProfiles);
	}
	createTeam() {
		console.log(this.teamName);
		if (this.teamName === undefined) { //TODO: Create check if team name is unique
			console.log('Team Name is Undefined');
			return;
		}

		const newTeam: Team = {
			id: this.generateTeamId(this.teamName),
			name: this.teamName,
			players: this.selectedProfiles.map(profile => profile.id),
			ownerId: 'kach0',
			winsCount: 2,
			drawsCount: 1,
			losesCount: 1,
			stars: 3
		};

		this.teamsService.createTeam(newTeam).subscribe((team) => console.log(team));
	}

	generateTeamId(teamName: string) {
		return teamName.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
			.concat('-' + Math.floor(Math.random() * 10000000)
				.toString());
	}


}

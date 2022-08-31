import { ProfileService } from 'src/app/services/profile/profile.service';
import { TeamsService } from './../../services/teams/teams.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from './../../interfaces/profile';
import { Team } from './../../interfaces/Team';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create-team',
	templateUrl: './create-team.component.html',
	styleUrls: ['./create-team.component.scss'],
})
export class CreateTeamComponent implements OnInit {
	currentProfile: Profile;

	desiredSlots: Array<any> = new Array(4);
	selectedProfiles: Array<Profile>;
	teamName: string;
	constructor(
		private teamsService: TeamsService,
		private profileService: ProfileService,
		private router: Router,
		) { }

		ngOnInit() {
			this.profileService.getProfile().subscribe(profile => {
				this.currentProfile = profile;
				this.selectedProfiles = [this.currentProfile];
			});
	}

	addNewSlot() {
		this.desiredSlots.push(undefined);
	}

	selectProfile(selectedProfile: Profile) {
		return this.selectedProfiles.push(selectedProfile);
	}

	deselectProfile(deselectedProfile: Profile) {
		this.selectedProfiles = this.selectedProfiles.filter(function (profile) { return profile._id != deselectedProfile._id; });
	}
	createTeam() {
		console.log(this.teamName);
		if (this.teamName === undefined) { //TODO: Create check if team name is unique
			console.log('Team Name is Undefined');
			return;
		}

		const newTeam: Team = {
			name: this.teamName,
			players: this.selectedProfiles.map(profile => profile._id),
		};

		this.teamsService.createTeam(newTeam).subscribe((response) => {
			if (response) {
				this.router.navigate(['/my-teams']);
			} else {
			}
		});
	}
}

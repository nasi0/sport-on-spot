import { Profile } from 'src/app/interfaces/profile';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { Lobby } from 'src/app/interfaces/Lobby';
import { Team } from 'src/app/interfaces/Team';
import { LobbiesService } from 'src/app/services/lobbies/lobbies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
	selector: 'app-lobby',
	templateUrl: './lobby.component.html',
	styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent implements OnInit {
	currentProfile: Profile;
	currentProfileTeams: any;
	isDataLoaded: boolean = false;
	lobbyId: string;
	currentLobby: Lobby;
	homeTeam: Team;
	guestTeam: Team;
	status?: string;

	constructor(
		private activatedRoute: ActivatedRoute,
		private lobbiesService: LobbiesService,
		private teamsService: TeamsService,
		private profileService: ProfileService,
		private localStorageService: LocalStorageService
	) {
	}

	ngOnInit() {
		this.loadCurrentProfileInfo();

		this.lobbyId = this.activatedRoute.snapshot.paramMap.get('id');
		this.lobbiesService.getLobby(this.lobbyId).subscribe((lobby) => {
			this.currentLobby = lobby;
			this.homeTeam = lobby.team;
			this.isDataLoaded = true;
			console.log(this.homeTeam);
		});
		//getTeamOfOwner
		this.profileService.getProfile().subscribe((profile) => {
			this.currentProfileTeams = profile.teams;
			console.log(profile.teams);
		});
	}

	loadCurrentProfileInfo() {
		this.localStorageService.loadInfo();
		this.localStorageService.currentProfile.subscribe(currentProfile => this.currentProfile = currentProfile);
	}

	/* loadPlayers(team) {
		console.log(team.playersIds);

		team.playersIds.forEach(player => this.profileService.getProfile(player).subscribe(profile => {
			team.players.push(profile);
			console.log(this.homeTeam);
		}));

		this.isDataLoaded = true;

	} */

	selectGuestTeam(team: Team) {
		this.guestTeam = team;
	}

	selectTeam() {
		this.guestTeam = this.currentProfileTeams.filter(team => team._id === this.guestTeam)[0];
		console.log('this.guestTeam');
		console.log(this.guestTeam);
		//this.loadPlayers(this.guestTeam);
	}
}

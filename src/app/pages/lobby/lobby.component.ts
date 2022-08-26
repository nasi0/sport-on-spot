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
	homeTeamId: string;
	homeTeam: Team;
	guestTeamId: string;
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
			this.homeTeamId = lobby.teamId;

			this.loadTeam(lobby.teamId)
		});
		if (this.currentProfile) {
			//getTeamOfOwner
			this.teamsService.getTeamByProfile(this.currentProfile.id).subscribe((teams) => this.currentProfileTeams = teams);

		}
	}

	loadCurrentProfileInfo() {
		this.localStorageService.loadInfo();
		this.localStorageService.currentProfile.subscribe(currentProfile => this.currentProfile = currentProfile);
	}

	loadTeam(teamId) {
		this.teamsService.getTeam(teamId).subscribe((team) => {
			this.homeTeam = team;
			this.loadPlayers(this.homeTeam);
		});
	}

	loadPlayers(team) {
		console.log(team.playersIds);

		team.playersIds.forEach(player => this.profileService.getProfile(player).subscribe(profile => {
			team.players.push(profile);
			console.log(this.homeTeam);
		}));

		console.log(this.homeTeam.players);
		this.isDataLoaded = true;

	}

	selectGuestTeam(team: Team) {
		this.guestTeam = team;
	}

	selectTeam() {
		this.guestTeam = this.currentProfileTeams.filter(team => team.id === this.guestTeamId)[0];
		console.log(this.guestTeam);
		this.loadPlayers(this.guestTeam);
	}
}

import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Lobby } from 'src/app/interfaces/Lobby';
import { Team } from 'src/app/interfaces/Team';
import { LobbiesService } from 'src/app/services/lobbies/lobbies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
	selector: 'app-lobby',
	templateUrl: './lobby.component.html',
	styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent implements OnInit {
	currentProfile: any;
	isDataLoaded: boolean = false;
	lobbyId: string;
	currentLobby: Lobby;
	homeTeam: Team;
	guestTeam: Team;
	guestTeamContact: string = '';

	constructor(
		private activatedRoute: ActivatedRoute,
		private lobbiesService: LobbiesService,
		private profileService: ProfileService,
		private localStorageService: LocalStorageService,
		private router: Router,
	) {
	}

	ngOnInit() {
		this.loadCurrentProfileInfo();

		this.lobbyId = this.activatedRoute.snapshot.paramMap.get('id');
		this.lobbiesService.getLobby(this.lobbyId).subscribe((lobby) => {
			this.currentLobby = lobby;
			this.homeTeam = lobby.homeTeam;
			this.guestTeam = lobby.guestTeam;
			this.isDataLoaded = true;
		});
		//getTeamOfOwner
		this.profileService.getProfile().subscribe((profile) => {
			this.currentProfile = profile;
		});
	}

	loadCurrentProfileInfo() {
		this.localStorageService.loadInfo();
		this.localStorageService.currentProfile.subscribe(currentProfile => this.currentProfile = currentProfile);
	}

	selectTeam() {
		this.guestTeam = this.currentProfile.teams.filter(team => team._id == this.guestTeam)[0];
	}

	numberOnly(event): boolean {
		const charCode = (event.which) ? event.which : event.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			return false;
		}
		return true;
	}

	clickChallenge() {
		this.lobbiesService.challengeLobby(this.currentLobby, this.guestTeam, this.guestTeamContact)
			.subscribe((match) => {
				this.router.navigate(['/match', match._id]);
			});
	}
}

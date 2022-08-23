import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { faVolleyball, faFutbol, faBasketball } from '@fortawesome/free-solid-svg-icons'
import { SportsService } from 'src/app/services/sports/sports.service';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { LobbiesService } from 'src/app/services/lobbies/lobbies.service';
import { LocationService } from 'src/app/services/location/location.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Lobby } from 'src/app/interfaces/Lobby';
import { Profile } from 'src/app/interfaces/profile';

@Component({
	selector: 'app-create-lobby',
	templateUrl: './create-lobby.component.html',
	styleUrls: ['./create-lobby.component.scss'],
})
export class CreateLobbyComponent implements OnInit {
	suggestedCities: any;
	nasko: any;
	currentProfile: any;
	selectedSport: any = {
		"id": "football",
		"name": "football",
		"icon": faFutbol,
		"gameParts": [
			"2x30min", "2x45min"
		]
	}
	selectedTeam: any;
	isCourtAvailable: any;
	selectedDate: any;
	selectedGamePart: any;
	selectedCity: any;

	myTeams: any;
	icons = {
		"faFutbol": faFutbol,
		"faVolleyball": faVolleyball,
		"faBasketball": faBasketball
	}
	faVolleyball = faVolleyball;
	faFutbol = faFutbol;
	faBasketball = faBasketball;
	sports: any;

	constructor(
		private teamsService: TeamsService,
		private sportsService: SportsService,
		private lobbiesService: LobbiesService,
		private locationService: LocationService,
		private localStorageService: LocalStorageService
	) { }

	ngOnInit() {
		this.currentProfile = this.localStorageService.currentProfile;
		this.teamsService.getTeamByProfile(this.currentProfile.id).subscribe((teams) => this.myTeams = teams);
		this.sportsService.getAllSports().subscribe((sports) => this.sports = sports);
	}

	onSportChanged(event: Event) {
		let selectedSportId = (event as CustomEvent).detail.value;
		this.selectedSport = this.sports.filter(obj => {
			return obj.id === selectedSportId;
		})[0];
		this.selectedGamePart = null;
	}

	onTeamChanged(event: Event) {
		let selectedTeamId = (event as CustomEvent).detail.value;
		this.selectedTeam = this.myTeams.filter(obj => {
			return obj.id === selectedTeamId;
		})[0];
	}

	createLobby() {
		if (this.selectedSport === undefined ||
			this.selectedTeam === undefined ||
			this.selectedDate === undefined) { //TODO: Create check if team name is unique
			console.log('Something is undefined');
			return;
		}

		const newLobby: Lobby = {
			id: UUID.UUID(),
			sportId: this.selectedSport.id,
			teamId: this.selectedTeam.id,
			courtAvailable: this.isCourtAvailable,
			date: this.selectedDate,
			gameParts: this.selectedGamePart
		};

		this.lobbiesService.createLobby(newLobby).subscribe((lobby) => console.log(lobby));
	}

	selectedCityChanged(newValue) {
		this.locationService.searchCity(newValue).subscribe((suggestedCities) => this.suggestedCities = suggestedCities);
	}

	selectCity(selectedCity) {
		this.selectedCity = selectedCity;
		console.log(selectedCity);
	}
}

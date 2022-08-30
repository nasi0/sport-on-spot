import { ProfileService } from 'src/app/services/profile/profile.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { faVolleyball, faFutbol, faBasketball } from '@fortawesome/free-solid-svg-icons'
import { SportsService } from 'src/app/services/sports/sports.service';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { LobbiesService } from 'src/app/services/lobbies/lobbies.service';
import { LocationService } from 'src/app/services/location/location.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Lobby } from 'src/app/interfaces/Lobby';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create-lobby',
	templateUrl: './create-lobby.component.html',
	styleUrls: ['./create-lobby.component.scss'],
})
export class CreateLobbyComponent implements OnInit {
	dateNow: any = new Date();

	suggestedCities: any;
	selectedCityModel: any;
	currentProfile: any;
	selectedSport: any = {
		"id": "football",
		"name": "football",
		"icon": faFutbol,
		"gameParts": [
			"2x30min", "2x45min"
		],
		"teamsFormat": ["5v5", "11v11"]
	}
	customSelectInterfaceOptions = {
		size: 'cover'
	}
	selectedTeam: any;
	isCourtAvailable: any;
	selectedDate: any;
	selectedGamePart: any;
	selectedTeamsFormat: any;
	selectedCity: any;

	myTeams: any = [];
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
		private profileService: ProfileService,
		private sportsService: SportsService,
		private lobbiesService: LobbiesService,
		private localStorageService: LocalStorageService,
		private modalCtrl: ModalController,
		private toastCtrl: ToastController,
		private router: Router,
	) { }

	ngOnInit() {
		this.localStorageService.loadInfo();
		this.localStorageService.currentProfile.subscribe(currentProfile => this.currentProfile = currentProfile);

		this.profileService.getProfile().subscribe((profile) => {
			this.myTeams = profile.teams;
			console.log(this.myTeams);
		});

		this.sportsService.getAllSports().subscribe((sports) => this.sports = sports);

		this.dateNow = this.prepareDateForView(this.dateNow);
	}

	@HostListener('window:popstate', ['$event'])
	dismissModal() {
		this.modalCtrl.dismiss();
	}

	onSportChanged(event: Event) {
		let selectedSportId = (event as CustomEvent).detail.value;
		this.selectedSport = this.sports.filter(obj => {
			return obj._id === selectedSportId;
		})[0];
		this.selectedGamePart = null;
		this.selectedTeamsFormat = null
	}

	onTeamChanged(event: Event) {
		let selectedTeamId = (event as CustomEvent).detail.value;
		this.selectedTeam = this.myTeams.filter(obj => {
			return obj._id === selectedTeamId;
		})[0];
		console.log(this.selectedTeam._id);
	}

	createLobby() {
		if (this.selectedSport === undefined ||
			this.selectedTeam === undefined ||
			this.selectedDate === undefined) { //TODO: Create check if team name is unique
			console.log('Something is undefined');
			return;
		}

		const newLobby: Lobby = {
			sport: this.selectedSport._id,
			team: this.selectedTeam._id,
			courtAvailable: this.isCourtAvailable,
			date: this.selectedDate,
			gameParts: this.selectedGamePart,
			teamsFormat: this.selectedTeamsFormat,
			city: this.selectedCity.display_name,
			cityLatitude: this.selectedCity.lat,
			cityLongitude: this.selectedCity.lon
		};
		this.lobbiesService.createLobby(newLobby)
			.subscribe((response) => {
				console.log(response);
				this.clearForm();
				if (response) {
					this.router.navigate(['/homepage']);
				} else {
					//this.openToast(response.message);
				}
			});
	}

	clearForm() {
		this.isCourtAvailable = null;
		this.selectedDate = null;
		this.selectedGamePart = null;
		this.selectedTeamsFormat = null;
		this.selectedCity = null;
	}

	selectCity(selectedCity) {
		this.selectedCity = selectedCity;
	}

	onWillDismiss() {
		if (window.history.state.modal) {
			history.back();
		}
	}

	onWillPresent() {
		const modalState = {
			modal: true,
			desc: 'Modal Opened'
		};
		history.pushState(modalState, null);
	}

	async openToast() {
		const toast = await this.toastCtrl.create({
			message: 'Lobby has been created',
			duration: 5000
		});
		toast.present();
	}

	prepareDateForView(date: Date): string {
		date.setMinutes(Math.ceil(date.getMinutes() / 15) * 15);
		return date.toJSON();
	}
}

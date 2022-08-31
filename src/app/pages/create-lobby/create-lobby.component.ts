import { ProfileService } from 'src/app/services/profile/profile.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { faVolleyball, faFutbol, faBasketball } from '@fortawesome/free-solid-svg-icons'
import { SportsService } from 'src/app/services/sports/sports.service';
import { LobbiesService } from 'src/app/services/lobbies/lobbies.service';
import { Lobby } from 'src/app/interfaces/Lobby';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Team } from 'src/app/interfaces/Team';

@Component({
	selector: 'app-create-lobby',
	templateUrl: './create-lobby.component.html',
	styleUrls: ['./create-lobby.component.scss'],
})
export class CreateLobbyComponent implements OnInit {
	currentProfile: any;
	dateNow: any = new Date();
	ownedTeams: Team[];

	tempLobby: any = {
		selectedSport: '',
		selectedTeam: '',
		isCourtAvailable: false,
		selectedDate: null,
		selectedGamePart: '',
		selectedTeamsFormat: '',
		selectedCity: '',
		homeTeamContact: '',
		status: 1
	}

	customSelectInterfaceOptions = {
		size: 'cover'
	}

	icons = {
		"faFutbol": faFutbol,
		"faVolleyball": faVolleyball,
		"faBasketball": faBasketball
	}
	allSports: any;

	constructor(
		private profileService: ProfileService,
		private sportsService: SportsService,
		private lobbiesService: LobbiesService,
		private modalCtrl: ModalController,
		private toastCtrl: ToastController,
		private router: Router,
	) { }

	ngOnInit() {
		this.profileService.getProfile().subscribe((profile) => {
			this.currentProfile = profile;
			this.ownedTeams = profile.teams.filter(team => team.owner === profile._id);
		});

		this.sportsService.getAllSports().subscribe((sports) => this.allSports = sports);

		this.dateNow = this.prepareDateForView(this.dateNow);
	}

	@HostListener('window:popstate', ['$event'])
	dismissModal() {
		this.modalCtrl.dismiss();
	}

	onSportChanged(event: Event) {
		let selectedSportId = (event as CustomEvent).detail.value;
		this.tempLobby.selectedSport = this.allSports.filter(obj => {
			return obj._id === selectedSportId;
		})[0];
		this.tempLobby.selectedGamePart = null;
		this.tempLobby.selectedTeamsFormat = null
	}

	onTeamChanged(event: Event) {
		let selectedTeamId = (event as CustomEvent).detail.value;
		this.tempLobby.selectedTeam = this.currentProfile.teams.filter(obj => {
			return obj._id == selectedTeamId;
		})[0];
	}

	createLobby() {
		if (this.tempLobby.selectedSport === undefined ||
			this.tempLobby.selectedTeam === undefined ||
			this.tempLobby.selectedDate === undefined) { //TODO: Create check if team name is unique
			console.log('Something is undefined');
			return;
		}

		const finalLobby: Lobby = {
			sport: this.tempLobby.selectedSport._id,
			homeTeam: this.tempLobby.selectedTeam,
			courtAvailable: this.tempLobby.isCourtAvailable,
			date: this.tempLobby.selectedDate,
			gameParts: this.tempLobby.selectedGamePart,
			teamsFormat: this.tempLobby.selectedTeamsFormat,
			city: this.tempLobby.selectedCity.display_name,
			cityLatitude: this.tempLobby.selectedCity.lat,
			cityLongitude: this.tempLobby.selectedCity.lon,
			homeTeamContact: this.tempLobby.homeTeamContact,
			status: 1
		};
		this.lobbiesService.createLobby(finalLobby)
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
		this.tempLobby.isCourtAvailable = null;
		this.tempLobby.selectedDate = null;
		this.tempLobby.selectedGamePart = null;
		this.tempLobby.selectedTeamsFormat = null;
		this.tempLobby.selectedCity = null;
	}

	selectCity(selectedCity) {
		this.tempLobby.selectedCity = selectedCity;
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

	numberOnly(event): boolean {
		const charCode = (event.which) ? event.which : event.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			return false;
		}
		return true;
	}
}

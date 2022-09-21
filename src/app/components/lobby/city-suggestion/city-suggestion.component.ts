import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
	selector: 'app-city-suggestion',
	templateUrl: './city-suggestion.component.html',
	styleUrls: ['./city-suggestion.component.scss'],
})
export class CitySuggestionComponent implements OnInit {
	@Output() newSelectedCityEvent = new EventEmitter<string>();
	@Input() selectedCity: any;
	selectedCityModel: any;
	suggestedCities: any;
	randomId: any;

	constructor(
		private modalCtrl: ModalController,
		private locationService: LocationService
	) { }

	ngOnInit() {
		this.randomId = Math.ceil(Math.random() * 100);
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

	selectedCityChanged(newValue) {
		if (newValue.length >= 2) {
			this.suggestedCities = this.locationService.searchCity(newValue);
		} else {
			this.suggestedCities = [];
		}
	}

	selectCity(selectedCity) {
		this.selectedCity = selectedCity;
		this.newSelectedCityEvent.emit(this.selectedCity);
		this.dismissModal();
		this.clearCitySuggestions();
	}

	closeCitySuggestionsModal() {
		this.dismissModal();
		this.clearCitySuggestions();
	}

	clearCitySuggestions() {
		this.suggestedCities = null;
	}

	@HostListener('window:popstate', ['$event'])
	dismissModal() {
		this.modalCtrl.dismiss();
	}
}

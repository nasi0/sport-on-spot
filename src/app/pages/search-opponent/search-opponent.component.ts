import { Component, OnInit } from '@angular/core';
import { faVolleyball, faFutbol, faBasketball } from '@fortawesome/free-solid-svg-icons'
import { SportsService } from 'src/app/services/sports/sports.service';
import { LobbiesService } from 'src/app/services/lobbies/lobbies.service';

@Component({
	selector: 'app-search-opponent',
	templateUrl: './search-opponent.component.html',
	styleUrls: ['./search-opponent.component.scss'],
})
export class SearchOpponentComponent implements OnInit {
	selectedCity: any;
	foundLobbies: any = [];
	allSports: any;

	icons = {
		"faFutbol": faFutbol,
		"faVolleyball": faVolleyball,
		"faBasketball": faBasketball
	}

	search = {
		sport: '',
		city: ''
	}

	constructor(
		private sportsService: SportsService,
		private lobbiesService: LobbiesService,
	) { }

	ngOnInit() {
		this.sportsService.getAllSports().subscribe((sports) => this.allSports = sports);

	}

	onSportChanged(event: Event) {
		this.search.sport = (event as CustomEvent).detail.value;
	}

	searchOpponents() {
		this.lobbiesService.searchLobby(this.search).subscribe((lobbies) => {
			this.foundLobbies = lobbies
		});
	}

	selectCity(newCity) {
		this.selectedCity = newCity;
		this.search.city = this.selectedCity?.display_name; //TODO: Broken when we are directly entering city
	}

	public customFormatter(value: number) {
		return `${value}km`
	}
}

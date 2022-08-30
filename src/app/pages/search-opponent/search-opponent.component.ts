import { Team } from 'src/app/interfaces/Team';
import { Component, OnInit } from '@angular/core';
import { faVolleyball, faFutbol, faBasketball } from '@fortawesome/free-solid-svg-icons'
import { SportsService } from 'src/app/services/sports/sports.service';
import { LobbiesService } from 'src/app/services/lobbies/lobbies.service';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { Lobby } from 'src/app/interfaces/Lobby';

@Component({
	selector: 'app-search-opponent',
	templateUrl: './search-opponent.component.html',
	styleUrls: ['./search-opponent.component.scss'],
})
export class SearchOpponentComponent implements OnInit {
	maxStars = [[], [], [], [], []];
	selectedCity: any;
	lobbies: any = [];
	sports: any;

	nasko: any;

	faVolleyball = faVolleyball;
	faFutbol = faFutbol;
	faBasketball = faBasketball;

	icons = {
		"faFutbol": faFutbol,
		"faVolleyball": faVolleyball,
		"faBasketball": faBasketball
	}


	foundOpponents = [
		{}, {}, {}, {}
	]

	search = {
		sport: '',
		city: ''
	}

	constructor(
		private sportsService: SportsService,
		private lobbiesService: LobbiesService,
		private teamsService: TeamsService
	) { }

	ngOnInit() {
		this.sportsService.getAllSports().subscribe((sports) => this.sports = sports);

	}

	onSportChanged(event: Event) {
		this.search.sport = (event as CustomEvent).detail.value;
	}

	searchOpponents() {
		this.lobbiesService.searchLobby(this.search).subscribe((lobbies) => {
			this.lobbies = lobbies
			console.log(this.lobbies);
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

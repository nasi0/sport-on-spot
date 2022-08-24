import { Component, OnInit } from '@angular/core';
import { faVolleyball, faFutbol, faBasketball } from '@fortawesome/free-solid-svg-icons'
import { SportsService } from 'src/app/services/sports/sports.service';
import { LobbiesService } from 'src/app/services/lobbies/lobbies.service';
import { Lobby } from 'src/app/interfaces/Lobby';

@Component({
	selector: 'app-search-opponent',
	templateUrl: './search-opponent.component.html',
	styleUrls: ['./search-opponent.component.scss'],
})
export class SearchOpponentComponent implements OnInit {
	lobbies: any;
	sports: any;

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
		sport: "football",
		range: 1,
		rating: 1
	}

	constructor(
		private sportsService: SportsService,
		private lobbiesService: LobbiesService
	) { }

	ngOnInit() {
		this.sportsService.getAllSports().subscribe((sports) => this.sports = sports);

	}

	onSportChanged(event: Event) {
		this.search.sport = (event as CustomEvent).detail.value;
		console.log(this.lobbies);
	}

	onRangeChange(event: Event) {
		this.search.range = (event as CustomEvent).detail.value;
	}


	searchOpponents() {
		this.lobbiesService.getAllLobbies().subscribe((lobbies) => this.lobbies = lobbies);
	}

	public customFormatter(value: number) {
		return `${value}km`
	}
}

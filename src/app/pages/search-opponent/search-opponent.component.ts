import { Component, OnInit } from '@angular/core';
import { faVolleyball, faFutbol, faBasketball } from '@fortawesome/free-solid-svg-icons'
import { SportsService } from 'src/app/services/sports/sports.service';

@Component({
	selector: 'app-search-opponent',
	templateUrl: './search-opponent.component.html',
	styleUrls: ['./search-opponent.component.scss'],
})
export class SearchOpponentComponent implements OnInit {
	faVolleyball = faVolleyball;
	faFutbol = faFutbol;
	faBasketball = faBasketball;

	icons = {
		"faFutbol": faFutbol,
		"faVolleyball": faVolleyball,
		"faBasketball": faBasketball
	}

	sports: any;

	foundOpponents = [
		{}, {}, {}, {}
	]

	search = {
		sport: "football",
		range: 1,
		rating: 1
	}

	constructor(
		private sportsService: SportsService
	) { }

	ngOnInit() {
		this.sportsService.getAllSports().subscribe((sports) => this.sports = sports);
	}

	onSportChanged(event: Event) {
		this.search.sport = (event as CustomEvent).detail.value;
	}

	onRangeChange(event: Event) {
		this.search.range = (event as CustomEvent).detail.value;
	}

	public customFormatter(value: number) {
		return `${value}km`
	}

}

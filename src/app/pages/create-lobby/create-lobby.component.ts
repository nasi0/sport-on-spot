import { Component, OnInit } from '@angular/core';
import { faVolleyball, faFutbol, faBasketball } from '@fortawesome/free-solid-svg-icons'
import { SportsService } from 'src/app/services/sports/sports.service';
import { TeamsService } from 'src/app/services/teams/teams.service';

@Component({
	selector: 'app-create-lobby',
	templateUrl: './create-lobby.component.html',
	styleUrls: ['./create-lobby.component.scss'],
})
export class CreateLobbyComponent implements OnInit {
	selectedGamePart: any;
	date: any;
	myTeams: any;
	currentProfileId = 'kach0';
	icons = {
		"faFutbol": faFutbol,
		"faVolleyball": faVolleyball,
		"faBasketball": faBasketball
	}
	faVolleyball = faVolleyball;
	faFutbol = faFutbol;
	faBasketball = faBasketball;
	hasSpot: any = false;
	sports: any;
	selectedSport: any = {
		"name": "football",
		"icon": faFutbol,
		"gameParts": [
			"2x30min", "2x45min"
		]
	}

	constructor(
		private teamsService: TeamsService,
		private sportsService: SportsService
	) { }

	ngOnInit() {
		this.teamsService.getTeamByProfile(this.currentProfileId).subscribe((teams) => this.myTeams = teams);
		this.sportsService.getAllSports().subscribe((sports) => this.sports = sports);
	}

	onSportChanged(event: Event) {
		let selectedSportName = (event as CustomEvent).detail.value;
		this.selectedSport = this.sports.filter(obj => {
			return obj.name === selectedSportName;
		})[0];
		this.selectedGamePart = null;
	}

	onTeamChanged(event: Event) {

	}

}

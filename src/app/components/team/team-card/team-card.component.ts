import { Profile } from './../../../interfaces/Profile';
import { ProfileService } from './../../../services/profile/profile.service';
import { Team } from './../../../interfaces/Team';
import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons'

@Component({
	selector: 'app-team-card',
	templateUrl: './team-card.component.html',
	styleUrls: ['./team-card.component.scss'],
})
export class TeamCardComponent implements OnInit {
	@Input() team: Team;
	players: Profile[] = [];
	faStar = faStar;

	constructor(
		private profileService: ProfileService
	) { }

	ngOnInit() {
	}
}

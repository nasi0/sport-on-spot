import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../../../interfaces/profile'

@Component({
	selector: 'app-profile-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {
	@Input() profile: Profile;
	matchesCount: number;
	winsCount: number;
	drawsCount: number;
	constructor() { }

	ngOnInit() {
		this.matchesCount = this.profile.matches.filter((match) => match['status'] > 2).length;

		this.winsCount = this.profile.matches.filter((match) => this.isWinMatch(match, this.profile._id)).length;
		this.drawsCount = this.profile.matches.filter((match) => this.isDrawMatch(match)).length;


		console.log(this.profile.matches);
		console.log(this.profile);
	}

	isWinMatch(match, profileId) {
		if (match['status'] <= 2) {
			return false;
		}
		if(match['result'] === 1) {
			return match['homeTeam']['players'].includes(profileId);
		} else if (match['result'] === 2) {
			return match['guestTeam']['players'].includes(profileId);
		}
		return false;
	}

	isDrawMatch(match) {
		if (match['status'] <= 2) {
			return false;
		}
		return match['result'] === 0;
	}
}

import { ProfileService } from 'src/app/services/profile/profile.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/interfaces/Match';
import { MatchService } from 'src/app/services/matches/matches.service';

@Component({
	selector: 'app-match',
	templateUrl: './match.component.html',
	styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
	currentProfile: any;
	currentMatchId: string;
	currentMatch: Match;
	isDataLoaded: boolean = false;
	isOwner: boolean = false;
	homeTeamScore: number = 0;
	guestTeamScore: number = 0;

	constructor(
		private activatedRoute: ActivatedRoute,
		private matchService: MatchService,
		private profileService: ProfileService
	) { }

	ngOnInit() {
		this.currentMatchId = this.activatedRoute.snapshot.paramMap.get('id');
		this.matchService.getMatch(this.currentMatchId).subscribe((match) => {
			this.currentMatch = match;
			this.isDataLoaded = true;

		});
		this.profileService.getProfile().subscribe((profile) => {
			this.currentProfile = profile;
			this.isOwner = this.isCurrentProfileOwner(this.currentMatch);
		});
	}

	isCurrentProfileOwner(match: Match) {
		let isHomeTeamOwner = match.homeTeam?.owner == this.currentProfile._id;
		let isGuestTeamOwner = match.guestTeam?.owner == this.currentProfile._id;
		return isHomeTeamOwner || isGuestTeamOwner;
	}

	finalizeMatch() {
		let result = 0;
		this.currentMatch.homeTeamScore = this.homeTeamScore || 0;
		this.currentMatch.guestTeamScore = this.guestTeamScore || 0;
		if ( this.currentMatch.homeTeamScore > this.currentMatch.guestTeamScore) {
			result = 1;
		} else if (this.currentMatch.homeTeamScore > this.currentMatch.guestTeamScore) {
			result = 2;
		}
		this.currentMatch.result = result;
		this.currentMatch.status = 3;
		this.matchService.finalizeMatch(this.currentMatch).subscribe((match) => console.log(match));
	};
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile/profile.service';
import { MatchService } from '../../services/matches/matches.service';
import {Profile} from '../../interfaces/profile'
import {Match} from '../../interfaces/match'


@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
	public accountId: string;
	public profile: Profile;
	public isDataLoaded: boolean;
	public matches: Array<Match>

	constructor(private activatedRoute: ActivatedRoute,
		private profileService: ProfileService,
		private matchService: MatchService) { }

	ngOnInit() {
		this.accountId = this.activatedRoute.snapshot.paramMap.get('id');
		this.prepareProfileData(this.accountId);

	}

	prepareProfileData(accountId: string) {
		this.profileService.getProfile(accountId).subscribe((profile) => {
			this.profile = profile;
			this.isDataLoaded = true;
		});
	}

	prepareProfileMatchData(accountId: string) {
		this.matchService.getMatch(accountId).subscribe((matches) => {
			this.matches = matches;
			this.isDataLoaded = true;
		});
	}


/*
	PROFILES = [
		{	"id": "nasi0",
			"name": "Atanas Petrov",
			"profileImageUrl": "https://placebeard.it/168x168"
		},
		{	"id": "nasi1",
			"name": "Atanasko Petrov",
			"profileImageUrl": "https://placebeard.it/168x168"
		}
	] */

	matches2 = [
		{
			"matchId": "fkoregj123",
			"homeTeamName": "Manchester United",
			"guestTeamName": "Dobrudja",
			"homeTeamScore": "1",
			"guestTeamScore": "2",
			"result": 2
		},
		{
			"matchId": "fkoregj123",
			"homeTeamName": "Manchester United",
			"guestTeamName": "CSKA",
			"homeTeamScore": "2",
			"guestTeamScore": "1",
			"result": 1
		},
		{
			"matchId": "fkoregj123",
			"homeTeamName": "Manchester United",
			"guestTeamName": "Levski",
			"homeTeamScore": "1",
			"guestTeamScore": "1",
			"result": 0
		},
		{
			"matchId": "fkoregj123",
			"homeTeamName": "Manchester United",
			"guestTeamName": "Minior",
			"homeTeamScore": "1",
			"guestTeamScore": "2",
			"result": 2
		},
	]

}

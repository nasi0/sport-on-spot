import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile/profile.service';
import { MatchService } from '../../services/matches/matches.service';
import { TeamsService } from '../../services/teams/teams.service';
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
	public matches: Array<Object> = [];

	constructor(private activatedRoute: ActivatedRoute,
		private profileService: ProfileService,
		private matchService: MatchService,
		private teamService: TeamsService) { }

	ngOnInit() {
		this.accountId = this.activatedRoute.snapshot.paramMap.get('id');
		this.prepareProfileData(this.accountId);
	}

	prepareProfileData(accountId: string) {
		this.profileService.getProfile(accountId).subscribe((profile) => {
			this.profile = profile;
			this.isDataLoaded = true;
			this.matches = [];
			this.prepareProfileMatchData(this.profile);
		});
	}

	prepareProfileMatchData(profile: Profile) {
		profile.pastMatches.forEach(matchId => {
			this.matchService.getMatch(matchId).subscribe((match) => {
				this.prepareTeamData(true, match, match.homeTeamId);
				this.prepareTeamData(false, match, match.guestTeamId);
				this.matches.push(match);
				console.log(match);
			});
		})
	}

	prepareTeamData(isHomeTeam: boolean, match: Match, teamId: string) {
		this.teamService.getTeam(teamId).subscribe((team) => {
			if (isHomeTeam) {
				match['homeTeamName'] = team.name;
			} else {
				match['guestTeamName'] = team.name
			}
		});
	}
}

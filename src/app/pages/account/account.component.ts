import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile/profile.service';
import { MatchService } from '../../services/matches/matches.service';
import { TeamsService } from '../../services/teams/teams.service';
import { Profile } from '../../interfaces/profile'
import { Match } from '../../interfaces/match'


@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
	public accountId: string;
	public profile: Profile;
	public isDataLoaded: boolean;

	constructor(private activatedRoute: ActivatedRoute,
		private profileService: ProfileService,
	) { }

	ngOnInit() {
		this.accountId = this.activatedRoute.snapshot.paramMap.get('id');
		this.prepareProfileData(this.accountId ? this.accountId : '');
	}

	prepareProfileData(accountID) {
		console.log(accountID);
		this.profileService.getProfile(accountID).subscribe((profile) => {
			this.profile = profile;
			this.isDataLoaded = true;
		});
	}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile/profile.service';
import { Profile } from '../../interfaces/profile'

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
	accountId: string;
	profile: Profile;
	isDataLoaded: boolean;
	pastMatches: any = [];
	nextMatches: any = [];

	constructor(private activatedRoute: ActivatedRoute,
		private profileService: ProfileService,
	) { }

	ngOnInit() {
		this.accountId = this.activatedRoute.snapshot.paramMap.get('id');
		this.prepareProfileData(this.accountId ? this.accountId : '');
	}

	prepareProfileData(accountID) {
		this.profileService.getProfile(accountID).subscribe((profile) => {
			this.profile = profile;
			this.isDataLoaded = true;

			this.pastMatches = profile.matches.filter(match => match['status'] > 2);
			this.nextMatches = profile.matches.filter(match => match['status'] <= 2);
		});
	}
}

import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-my-teams',
	templateUrl: './my-teams.component.html',
	styleUrls: ['./my-teams.component.scss'],
})
export class MyTeamsComponent implements OnInit {
	myTeams: any
	ownedTeams: any;
	joinedTeams: any;

	constructor(
		private profileService: ProfileService,
		private router: Router,
		private activeRoute: ActivatedRoute
	) { }

	ngOnInit() {
		this.activeRoute.params.subscribe(routeParams => {
			this.profileService.getProfile().subscribe((profile) => {
				this.myTeams = profile.teams;
				this.ownedTeams = this.myTeams?.filter(team => team.owner == profile._id);
				this.joinedTeams = this.myTeams?.filter(team => team.owner !== profile._id);
			});
		});
	}

	goToCreateTeamPage() {
		this.router.navigate(['/my-teams']);
	}
}

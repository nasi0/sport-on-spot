import { ProfileService } from 'src/app/services/profile/profile.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';

@Component({
	selector: 'app-search-profile',
	templateUrl: './search-profile.component.html',
	styleUrls: ['./search-profile.component.scss'],
})
export class SearchProfileComponent implements OnInit {
	@Output() onSelectProfile: EventEmitter<Profile> = new EventEmitter();
	@Output() onDeselectProfile: EventEmitter<Profile> = new EventEmitter();
	public searchTerm: string;
	nasko: string = '';
	selectedProfile: Profile;
	profiles;

	constructor(private profileService: ProfileService) { }

	ngOnInit() {
		this.profileService.getProfile('all').subscribe(profile => this.profiles = profile);
	}

	onClick(profile) {
		this.selectedProfile = profile;
		this.onSelectProfile.emit(this.selectedProfile);
	}

	clearSelected(profile) {
		this.selectedProfile = null;
		this.onDeselectProfile.emit(profile);
		this.nasko = '';
	}


}

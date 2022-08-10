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
  constructor() { }

  ngOnInit() {}

  onClick(profile) {
    this.selectedProfile = profile;
    this.onSelectProfile.emit(this.selectedProfile);
  }

  clearSelected(profile) {
    this.selectedProfile = null;
    this.onDeselectProfile.emit(profile);
    this.nasko = '';
  }

  profiles = [
		{
			"id": "nasi0",
			"name": "Atanas Petrov",
			"profileImageUrl": "https://placebeard.it/168x168",
			"pastMatches": [
				"match-1",
				"match-2",
				"match-3"
			],
			"nextMatches": []
		},
		{
			"id": "kach0",
			"name": "Kacho Isusov",
			"profileImageUrl": "https://placebeard.it/168x168"
		},
		{
			"id": "nasi1",
			"name": "Atanasko Petrov",
			"profileImageUrl": "https://placebeard.it/168x168"
		},
		{
			"id": "nasi2",
			"name": "Atanas2 Petrov",
			"profileImageUrl": "https://placebeard.it/168x168"
		},
		{
			"id": "nasi3",
			"name": "Atanas3 Petrov",
			"profileImageUrl": "https://placebeard.it/168x168"
		},
		{
			"id": "nasi3",
			"name": "Atanas3 Petrov",
			"profileImageUrl": "https://placebeard.it/168x168"
		},
		{
			"id": "nasi3",
			"name": "Atanas3 Petrov",
			"profileImageUrl": "https://placebeard.it/168x168"
		},
		{
			"id": "nasi3",
			"name": "Atanas3 Petrov",
			"profileImageUrl": "https://placebeard.it/168x168"
		},
		{
			"id": "nasi3",
			"name": "Atanas3 Petrov",
			"profileImageUrl": "https://placebeard.it/168x168"
		}
	]
}

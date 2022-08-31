import { Component, OnInit, Input } from '@angular/core';
import {Profile} from '../../../interfaces/profile'

@Component({
  selector: 'app-profile-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {
  @Input() profile: Profile;
  matchesCount: Number;
  constructor() { }

  ngOnInit() {
    this.matchesCount = this.profile.matches.filter((match) => match['status'] > 2).length;
  }

}

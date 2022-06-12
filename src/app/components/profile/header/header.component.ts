import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {
  @Input() profile;
  constructor() { }

  ngOnInit() {}

}

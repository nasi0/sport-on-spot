import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Create Team', url: '/create-team', icon: 'person-add' },
    { title: 'My Teams', url: '/my-teams', icon: 'people' },
    { title: 'Search Opponent', url: '/search-opponent', icon: 'search' },
    { title: 'Create Lobby', url: '/create-lobby', icon: 'add-circle' },
  ];
  constructor() {}
}

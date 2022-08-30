import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Create Teams', url: '/create-team', icon: 'paper-plane' },
    { title: 'My Teams', url: '/my-teams', icon: 'heart' },
    { title: 'Search Opponent', url: '/search-opponent', icon: 'search' },
    { title: 'Create Lobby', url: '/create-lobby', icon: 'search' },
  ];
  public labels = ['Family', 'Friends'];
  constructor() {}
}

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
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Register', url: '/register', icon: 'log-in' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends'];
  constructor() {}
}

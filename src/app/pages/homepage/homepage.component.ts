import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  buttons = [
    {
      label: 'You have a team and searching for opponent?',
      link: '/create-lobby'
    },
    {
      label: 'You don\'t have a team?',
      link: '/create-team'
    },
    {
      label: 'Are you searching for a game?',
      link: '/search-opponent'
    },
    {
      label: 'Are you searching for a game?',
      link: '/search-opponent'
    }
  ]

}

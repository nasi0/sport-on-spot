import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  constructor() { }

  ngOnInit() {}

  profile = {
    "name": "Atanas Petrov",
    "profileImageUrl": "https://placebeard.it/168x168"
  }

  matches = [
    {
      "matchId": "fkoregj123",
      "homeTeamName": "Manchester United",
      "guestTeamName": "Dobrudja",
      "homeTeamScore": "1",
      "guestTeamScore": "2",
      "result": 2
    },
    {
      "matchId": "fkoregj123",
      "homeTeamName": "Manchester United",
      "guestTeamName": "CSKA",
      "homeTeamScore": "2",
      "guestTeamScore": "1",
      "result": 1
    },
    {
      "matchId": "fkoregj123",
      "homeTeamName": "Manchester United",
      "guestTeamName": "Levski",
      "homeTeamScore": "1",
      "guestTeamScore": "1",
      "result": 0
    },
    {
      "matchId": "fkoregj123",
      "homeTeamName": "Manchester United",
      "guestTeamName": "Minior",
      "homeTeamScore": "1",
      "guestTeamScore": "2",
      "result": 2
    },
  ]

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-matchrow',
  templateUrl: './matchrow.component.html',
  styleUrls: ['./matchrow.component.scss'],
})
export class MatchrowComponent implements OnInit {
  @Input() match: any;
  constructor() { }

  ngOnInit() {}

}

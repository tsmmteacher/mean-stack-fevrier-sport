import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchesresult',
  templateUrl: './matchesresult.component.html',
  styleUrls: ['./matchesresult.component.css']
})
export class MatchesresultComponent implements OnInit {
matches:any;
  constructor() { }

  ngOnInit() {
    this.matches=[
      {id:1,teamOne:'FCB', teamTwo:'RMD', scoreOne:0,scoreTwo:4, logoOne:'logo_1.png',logoTwo:'logo_2.png'},
      {id:2,teamOne:'EST', teamTwo:'CA', scoreOne:8,scoreTwo:8, logoOne:'logo_3.png',logoTwo:'logo_4.png'},
      {id:2,teamOne:'EST', teamTwo:'CA', scoreOne:18,scoreTwo:8, logoOne:'logo_3.png',logoTwo:'logo_4.png'}


    ];
  }

}

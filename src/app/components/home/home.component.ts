import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  matchObj:any;
  constructor() { }

  ngOnInit() {
    this.matchObj = {id:1,teamOne:'FCB', teamTwo:'RMD', scoreOne:0,scoreTwo:4, logoOne:'logo_1.png',logoTwo:'logo_2.png'};

  }

}

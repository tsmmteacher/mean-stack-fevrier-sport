import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches:any;
  constructor(private router:Router) { }
  ngOnInit() {
    this.matches=[
      {id:1,teamOne:'FCB', teamTwo:'RMD', scoreOne:0,scoreTwo:4, logoOne:'logo_1.png',logoTwo:'logo_2.png'},
      {id:2,teamOne:'EST', teamTwo:'CA', scoreOne:12,scoreTwo:8, logoOne:'logo_3.png',logoTwo:'logo_4.png'},
      {id:2,teamOne:'EST', teamTwo:'CA', scoreOne:1,scoreTwo:1, logoOne:'logo_3.png',logoTwo:'logo_4.png'}
    ];
  }
  salutations(id){
    alert('Hello '+id);
  }
  goToMatch(id:number){
   // alert(id);
    this.router.navigate([`displayMatch/${id}`]);
  }

}

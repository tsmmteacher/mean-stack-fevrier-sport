import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
@Input() match:any;
  constructor() { }

  ngOnInit() {
  }
  color(x:number,y:number){
    if(x<y){return ['yellow',0,'Loss']}
    else if(x>y) {return ['blue',1,'Win']}
    else {
      return ['green',2,'Draw']
    }
  }
  /*result(x:number,y:number){
    if(x<y){return 0}
    else if(x>y) {return 1}
    else {
      return 2
    }
  }
*/
}

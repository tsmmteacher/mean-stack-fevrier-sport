import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams:any;
  constructor(private router:Router) { }

  ngOnInit() {//fonction qui s'exécute lors du lancement du composant
  this.teams=[
    {id:1, name:'RMD',foundation:'1899', stadium:'bernabiu', country:'SPAIN'},
    {id:2, name:'FCB',foundation:'1900', stadium:'Camp new', country:'SPAIN'},
    {id:3, name:'SEV',foundation:'1920', stadium:'STA SEV', country:'SPAIN'}
  ];
  }
  goToTeam(id:number){
    alert(id);
     this.router.navigate([`displayTeam/${id}`]);
   }

}

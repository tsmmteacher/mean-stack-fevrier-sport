import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players:any;
  constructor(private router:Router,
    private playerService:PlayerService) { }

  ngOnInit() {
   /* this.players=[
      {id:1, name:'Ronaldo',poste:'attaquant', numero:'7', age:30,description:'Meilleur joueur au monde'},
      {id:2, name:'Ronaldo',poste:'attaquant', numero:'7', age:30,description:'Meilleur joueur au monde'},
      {id:3, name:'Ronaldo',poste:'attaquant', numero:'7', age:30,description:'Meilleur joueur au monde'},
      {id:4, name:'Ronaldo',poste:'attaquant', numero:'7', age:30,description:'Meilleur joueur au monde'}

    ];*/
    this.playerService.getAllPlayers().subscribe(
      (data)=>{
        this.players=data.allPlayers;
      }
    );
  }
  goToPlayer(id:number){
    this.router.navigate([`displayPlayer/${id}`]);
  }
  goToEditPlayer(id:number){
    this.router.navigate([`editPlayer/${id}`]);
  }
  deletePlayer(id){
    this.playerService.getDeletePlayer(id).subscribe(
      (dataDelete)=>{
        console.log('Joueur supprimé avec succès',dataDelete.message);
        this.playerService.getAllPlayers().subscribe(
          (data)=>{
            this.players=data.allPlayers;
          }
        );
      }
    )
  }

}

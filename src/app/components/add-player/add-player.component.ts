import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player:any={};
  playerForm:FormGroup;
  constructor(private fb:FormBuilder,
    private playerService:PlayerService,
    private router:Router
    ) { }//pour créer les inputs

  ngOnInit() {
    this.playerForm = this.fb.group({
        name:[''],
        poste:[''],
        numero:[''],
        age:[''],
        description:['']
      }
    )
  }
  addPlayer(){
    /*alert('BTN Clicked ');
    console.log('Here the team object : ',this.player);*/
    this.playerService.addPlayer(this.player).subscribe(
      //()=>{} les parenthèses : c'est le retour du Back End
      ()=>{
        console.log('Ajout avec succès ');
        this.router.navigate(['admin']);
      }

    )

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
id:any;
  player:any={};
  playerForm:FormGroup;
  constructor(private fb:FormBuilder,
    private playerService:PlayerService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) { }//pour créer les inputs

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe(
(data)=>{this.player=data;}

    );
    this.playerForm = this.fb.group({
        name:[''],
        poste:[''],
        numero:[''],
        age:[''],
        description:['']
      }
    )
  }
  editPlayer(){
    /*alert('BTN Clicked ');
    console.log('Here the team object : ',this.player);*/
    this.playerService.editPlayer(this.player).subscribe(
      //()=>{} les parenthèses : c'est le retour du Back End
      ()=>{
        console.log('MAJ avec succès ');
        this.router.navigate(['admin']);
      }

    )

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team:any={};
  teamForm:FormGroup;
  constructor(private fb:FormBuilder,
    private teamService:TeamService,
    private router:Router
    ) { }//pour créer les inputs

  ngOnInit() {
    this.teamForm = this.fb.group({
        name:[''],
        country:[''],
        foundation:[''],
        stadium:['']
      }
    )
  }
  /*addTeam(){
    alert('BTN Clicked ');
    console.log('Here the team object : ',this.team);
  }*/
  addTeam(){
    /*alert('BTN Clicked ');
    console.log('Here the team object : ',this.player);*/
    this.teamService.addTeam(this.team).subscribe(
      ()=>{
        console.log('Ajout avec succès ');
        this.router.navigate(['admin']);
      }

    )

  }
}

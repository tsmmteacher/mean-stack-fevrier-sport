import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  match:any={};
  formMatch:FormGroup;
  constructor(private fb:FormBuilder) { }//pour créer les inputs

  ngOnInit() {
    this.formMatch = this.fb.group({
      teamOne:[''],
      teamTwo:[''],
      scoreOne:[''],
      scoreTwo:[''],
      logoOne: [''],
      logoTwo: ['']
      }
    )
  }
  addMatch(){
    alert('BTN Display Clicked ');
    console.log('Here the team object : ',this.match);

  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
  @Input() joueur:any;
  constructor() { }

  ngOnInit() {
  }

}

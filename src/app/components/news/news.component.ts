import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
joueurs : any;
  constructor() { }
  ngOnInit() {
    this.joueurs=[
      {id:1, name:'Ronaldo',poste:'attaquant', numero:'7', age:30,description:'Meilleur joueur au monde',img:'assets/images/img_1.jpg'},
      {id:2, name:'Zidane',poste:'attaquant', numero:'10', age:23,description:'Good joueur ',img:'assets/images/img_2.jpg'},
      {id:2, name:'Sami AYEDI',poste:'milieu de terrain', numero:'13', age:27,description:'Très bon ',img:'assets/images/img_3.jpg'}

    ];
  }

}

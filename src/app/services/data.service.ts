import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  players =  [
    {id:1, name:'Ronaldo',poste:'attaquant', numero:'7', age:20,description:'Meilleur joueur au monde'},
    {id:2, name:'Xavi',poste:'attaquant', numero:'17', age:30,description:'Meilleur joueur au monde'},
    {id:3, name:'Iniesta',poste:'attaquant', numero:'27', age:40,description:'Meilleur joueur au monde'},
    {id:4, name:'Ribery',poste:'attaquant', numero:'37', age:50,description:'Meilleur joueur au monde'}
   ];
   let  matches =  [
    {}
   ];
   return {players, matches};

  }
}

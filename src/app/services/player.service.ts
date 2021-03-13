import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  //playerUrl ='api/players';//equiv à localhots api par convention et players : nom de table
  playerUrl ='http://localhost:3000';
  constructor(private httpClient:HttpClient) { }//c'est le "post MAN"

  /*addPlayer(player:any){
    return this.httpClient.post(this.playerUrl, player);
  }*/
  addPlayer(player:any){
    return this.httpClient.post(`${this.playerUrl}/addPlayer`, player);
  }
  getAllPlayers(){
    return this.httpClient.get<{allPlayers:any}>(`${this.playerUrl}/getAllPlayers`);
  }
  getPlayerById(id){
    return this.httpClient.get<{player:any}>(`${this.playerUrl}/getPlayerById/${id}`);
  }
  getDeletePlayer(id){
    return this.httpClient.delete<{message:string}>(`${this.playerUrl}/deletePlayer/${id}`);
  }
  editPlayer(player:any){
    return this.httpClient.put(`${this.playerUrl}/editPlayer/${player.id}`, player);
  }
}

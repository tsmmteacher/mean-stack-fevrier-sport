import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesresultComponent } from './components/matchesresult/matchesresult.component';
import { SignupComponent } from './components/signup/signup.component';
import { DisplayMatchComponent } from './display-match/display-match.component';
import { DisplayTeamComponent } from './display-team/display-team.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent},
  {path:'add-player',component:AddPlayerComponent},
  {path:'add-team',component:AddTeamComponent},
  {path:'add-match',component:AddMatchComponent},
  {path:'matchesresult',component:MatchesresultComponent},
  {path:'displayPlayer/:id',component:DisplayPlayerComponent},
  {path:'displayMatch/:id',component:DisplayMatchComponent},
  {path:'displayTeam/:id',component:DisplayTeamComponent},
  {path:'editPlayer/:id',component:EditPlayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

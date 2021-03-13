import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PagetitleComponent } from './components/pagetitle/pagetitle.component';
import { ResultatsComponent } from './components/resultats/resultats.component';
import { NewsComponent } from './components/news/news.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchesresultComponent } from './components/matchesresult/matchesresult.component';
import { ResultComponent } from './components/result/result.component';
import { JoueurComponent } from './components/joueur/joueur.component';
import { ListejoueurComponent } from './components/listejoueur/listejoueur.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayMatchComponent } from './display-match/display-match.component';
import { DisplayTeamComponent } from './display-team/display-team.component';
import { DataService } from './services/data.service';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { EditPlayerComponent } from './components/edit-player/edit-player.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PagetitleComponent,
    ResultatsComponent,
    NewsComponent,
    VideosComponent,
    BlogComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    TeamsComponent,
    PlayersComponent,
    MatchesComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AddMatchComponent,
    MatchesresultComponent,
    ResultComponent,
    JoueurComponent,
    ListejoueurComponent,
    DisplayPlayerComponent,
    DisplayMatchComponent,
    DisplayTeamComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   // InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

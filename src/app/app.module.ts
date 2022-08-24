import { RouteReuseStrategy } from '@angular/router';

/** Modules */
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

/** Components */
import { AppComponent } from './app.component';
import { TeamCardComponent } from './components/team/team-card/team-card.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CreateTeamComponent } from './pages/create-team/create-team.component';
import { SearchProfileComponent } from './components/team/search-profile/search-profile.component';
import { MyTeamsComponent } from './pages/my-teams/my-teams.component';
import { SearchOpponentComponent } from './pages/search-opponent/search-opponent.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamComponent } from './pages/team/team.component';
import { CreateLobbyComponent } from './pages/create-lobby/create-lobby.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CitySuggestionComponent } from './components/lobby/city-suggestion/city-suggestion.component';


@NgModule({
	declarations: [
		AppComponent,
		HomepageComponent,
		CreateTeamComponent,
		SearchProfileComponent,
		MyTeamsComponent,
		TeamCardComponent,
		SearchOpponentComponent,
		TeamComponent,
		CreateLobbyComponent,
		LoginComponent,
		RegisterComponent,
		CitySuggestionComponent
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		Ng2SearchPipeModule,
  		FontAwesomeModule
	],
	providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
	bootstrap: [AppComponent],
})
export class AppModule { }

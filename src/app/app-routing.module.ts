import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component'
import { CreateTeamComponent } from './pages/create-team/create-team.component';
import { MyTeamsComponent } from './pages/my-teams/my-teams.component';
import { SearchOpponentComponent } from './pages/search-opponent/search-opponent.component';
import { CreateLobbyComponent } from './pages/create-lobby/create-lobby.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { MatchComponent } from './pages/match/match.component';
import { AccountComponent } from './pages/account/account.component';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'homepage',
		pathMatch: 'full'
	},
	{
		path: 'homepage',
		component: HomepageComponent
	},
	{
		path: 'account',
		component: AccountComponent,
		canActivate: [IsAuthenticatedGuard]
	},
	{
		path: 'create-team',
		component: CreateTeamComponent,
		canActivate: [IsAuthenticatedGuard]
	},
	{
		path: 'my-teams',
		component: MyTeamsComponent,
		canActivate: [IsAuthenticatedGuard]
	},
	{
		path: 'search-opponent',
		component: SearchOpponentComponent,
		canActivate: [IsAuthenticatedGuard]
	},
	{
		path: 'create-lobby',
		component: CreateLobbyComponent,
		canActivate: [IsAuthenticatedGuard]
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'lobby/:id',
		component: LobbyComponent
	},
	{
		path: 'match/:id',
		component: MatchComponent,
		canActivate: [IsAuthenticatedGuard]
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload'})
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }

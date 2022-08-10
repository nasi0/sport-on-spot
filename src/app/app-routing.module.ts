import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component'
import { CreateTeamComponent } from './pages/create-team/create-team.component';
import { MyTeamsComponent } from './pages/my-teams/my-teams.component';
import { SearchOpponentComponent } from './pages/search-opponent/search-opponent.component';
import { CreateLobbyComponent } from './pages/create-lobby/create-lobby.component';

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
		path: 'folder/:id',
		loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
	},
	{
		path: 'account',
		loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
	},
	{
		path: 'create-team',
		component: CreateTeamComponent
	},
	{
		path: 'my-teams',
		component: MyTeamsComponent
	},
	{
		path: 'search-opponent',
		component: SearchOpponentComponent
	},
	{
		path: 'create-lobby',
		component: CreateLobbyComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }

import { Team } from 'src/app/interfaces/Team';
export interface Profile {
	_id?: string;
	name: string;
	email: string;
	profileImageUrl?: string;
	matches?: string[]
	teams?: Team[]
}

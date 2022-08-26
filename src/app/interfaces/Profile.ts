export interface Profile {
	id: string;
	name: string;
	email: string;
	profileImageUrl?: string;
	pastMatches?: string[]
	nextMatches?: string[]
	teams?: string[]
}

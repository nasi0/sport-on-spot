export interface Profile {
	id: string;
	firstname: string;
	lastname: string;
	email: string;
	profileImageUrl?: string;
	pastMatches?: string[]
	nextMatches?: string[]
	teams?: string[]
}

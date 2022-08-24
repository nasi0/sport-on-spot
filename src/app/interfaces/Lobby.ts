export interface Lobby {
	id: string;
	sportId: string;
	teamId: string;
	courtAvailable?: boolean;
	date?: string;
	gameParts?: string;
	teamsFormat?: string;
	city?: string;
	cityLongitude?: string;
	cityLatitude?: string;
}

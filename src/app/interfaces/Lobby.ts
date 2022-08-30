export interface Lobby {
	_id?: string;
	sport: string;
	team: any;
	match?: string;
	courtAvailable?: boolean;
	date?: string;
	gameParts?: string;
	teamsFormat?: string;
	city?: string;
	cityLongitude?: string;
	cityLatitude?: string;
}


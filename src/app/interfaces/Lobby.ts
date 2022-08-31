export interface Lobby {
	_id?: string;
	sport: string;
	homeTeam: any;
	match?: string;
	courtAvailable?: boolean;
	date?: string;
	gameParts?: string;
	teamsFormat?: string;
	city?: string;
	cityLongitude?: string;
	cityLatitude?: string;
	homeTeamContact: string;
	guestTeam?: any
	guestTeamContact?: string;
	status?: number;
}


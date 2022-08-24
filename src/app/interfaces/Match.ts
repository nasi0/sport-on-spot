export interface Match {
	id: string;
	homeTeamId: string;
	guestTeamId: string;
	finished?: boolean;
	homeTeamScore?: number;
	guestTeamScore?: number;
	result?: number;
}


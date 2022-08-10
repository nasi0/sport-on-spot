export interface Team {
	id?: string;
	name: string;
	players: string[];
	ownerId: string;
	winsCount: number;
	drawsCount: number;
	losesCount: number;
	stars: number;
}

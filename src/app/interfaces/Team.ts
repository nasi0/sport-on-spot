export interface Team {
	_id?: string;
	name: string;
	owner?: string;
	winsCount?: number;
	drawsCount?: number;
	losesCount?: number;
	stars?: number;
	players?: any[]
}

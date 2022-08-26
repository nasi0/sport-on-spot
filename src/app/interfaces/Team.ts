import { Profile } from "./profile";

export interface Team {
	id: string;
	name: string;
	ownerId: string;
	playersIds?: string[];
	winsCount?: number;
	drawsCount?: number;
	losesCount?: number;
	stars?: number;
	players?: Profile[]
}

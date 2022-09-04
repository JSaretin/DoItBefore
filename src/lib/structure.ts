export interface Data {
	description: string;
	todos: { title: string; id: number; completed: boolean }[];
	deadline: string;
	// lastupdated?: number;
}

export interface SavedData extends Data {
	key: string;
}

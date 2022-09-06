type Permission = 'delete' | 'update' | 'edit' | 'privacy';

export interface User {
	key: string;
}

export interface FullUser extends User {
	email: string;
	name: string;
}

export interface CountdownForm {
	description: string;
	todos: { title: string; id: number; completed: boolean }[];
	deadline: string;
	is_public: boolean;
}
export interface CountdownToSave extends CountdownForm {
	owner: string;
	can_edit: { user_id: User['key']; perm: Permission[] }[];
	created_at: number;
}

export interface SavedCountdown extends CountdownToSave {
	key: string;
}

export interface PageConfig {
	showInfo: boolean;
	showTodos: boolean;
}

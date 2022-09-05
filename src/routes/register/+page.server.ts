import { error, redirect } from '@sveltejs/kit';
import type { Action } from '../$types';
import bcrypt from 'bcryptjs';
import { deta } from '$lib/deta';

export const POST: Action = async ({ request }) => {
	const form = await request.formData();
	const email = form.get('email')?.toString(),
		password = form.get('password')?.toString(),
		name = form.get('name')?.toString(),
		confirm_password = form.get('confirm_password')?.toString();
	if (!email || !password || !confirm_password) {
		return {
			status: 400,
			errors: {
				message: 'all feild are required'
			}
		};
	}

	if (password !== confirm_password) {
		return {
			status: 400,
			errors: {
				message: 'password did not match'
			}
		};
	}

	const oldUser = await deta.Base('doitbefore_users').fetch({ email });
	if (oldUser.count !== 0) {
		return {
			status: 400,
			errors: {
				message: 'this email has already been used'
			}
		};
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	await deta.Base('doitbefore_users').put({ email, name, password: hashedPassword });
	return redirect(302, '/login');
};

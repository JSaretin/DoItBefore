import { error, redirect } from '@sveltejs/kit';
import type { Action } from '../$types';
import bcrypt from 'bcryptjs';
import { deta } from '$lib/deta';

export const POST: Action = async ({ request }) => {
	const form = await request.formData();
	const email = form.get('email')?.toString(),
		password = form.get('password')?.toString();
	if (!email || !password) {
		return {
			status: 400,
			errors: {
				message: 'all feild are required'
			}
		};
	}

	const queryUser = await deta.Base('doitbefore_users').fetch({ email });
	if (queryUser.count == 0) {
		return {
			status: 400,
			errors: {
				message: 'invalid email or password'
			}
		};
	}

	const user: { password: string } = queryUser.items[0];

	const verified = await bcrypt.compare(password, user.password);
	console.log(verified);
	if (!verified) {
		return {
			status: 400,
			errors: {
				message: 'invalid email or password'
			}
		};
	}
	// await deta.Base('doitbefore_users').put({ email, name, password: hashedPassword });
	return redirect(302, '/');
};

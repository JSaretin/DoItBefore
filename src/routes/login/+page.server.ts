import { error, redirect } from '@sveltejs/kit';
import type { Action, PageServerLoad } from '../$types';
import bcrypt from 'bcryptjs';
import { deta } from '$lib/deta';
import { parse, serialize } from 'cookie';
import jwt from 'jsonwebtoken';

export const load: PageServerLoad = async ({ request }) => {
	const token: string | undefined = parse(request.headers.get('cookie') || '')?.auth_token;
	if (token !== undefined) {
		throw redirect(302, '/');
	}
};

export const POST: Action = async ({ request, setHeaders }) => {
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

	const user: { password: string; key: string } = queryUser.items[0];

	const verified = await bcrypt.compare(password, user.password);
	if (!verified) {
		return {
			status: 400,
			errors: {
				message: 'invalid email or password'
			}
		};
	}

	const jwtToken = jwt.sign({ user_id: user.key }, process.env.SECRETKEY!, {
		expiresIn: '7d'
	});

	const token = serialize('auth_token', jwtToken, {
		path: '/',
		expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7),
		maxAge: 1000 * 60 * 60 * 24 * 7,
		httpOnly: true
	});

	setHeaders({ 'set-cookie': token });

	return redirect(302, '/');
};

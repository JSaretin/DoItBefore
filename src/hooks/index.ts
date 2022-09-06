import type { Handle } from '@sveltejs/kit';
import { parse, serialize } from 'cookie';
import jwt from 'jsonwebtoken';

export const handle: Handle = async ({ event, resolve }) => {
	const token: string | undefined = parse(event.request.headers.get('cookie') || '')?.auth_token;
	let user: { key?: string } = {};
	try {
		const { user_id }: { user_id: string } = jwt.verify(token, process.env.SECRETKEY!);
		user['key'] = user_id;
	} catch {}
	event.locals['user'] = user;
	const response = await resolve(event);
	if (token && user.key === undefined) {
		response.headers.set(
			'set-cookie',
			serialize('auth_token', '', { path: '/', maxAge: 0, expires: new Date(0) })
		);
	}

	return response;
};

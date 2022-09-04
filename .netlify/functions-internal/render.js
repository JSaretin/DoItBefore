const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-9135d1e2.js","imports":["_app/immutable/start-9135d1e2.js","_app/immutable/chunks/index-860632ed.js","_app/immutable/chunks/singletons-ac5309eb.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "api/countdown",
				pattern: /^\/api\/countdown\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/countdown/_server.ts.js'))
			},
			{
				id: "view-[countdown_id]",
				pattern: /^\/view-([^/]+?)\/?$/,
				names: ["countdown_id"],
				types: [null],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});

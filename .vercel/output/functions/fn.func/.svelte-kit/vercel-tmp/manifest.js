export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.461024ed.js","app":"_app/immutable/entry/app.a2929766.js","imports":["_app/immutable/entry/start.461024ed.js","_app/immutable/chunks/scheduler.dd094d23.js","_app/immutable/chunks/singletons.7a68a799.js","_app/immutable/chunks/index.a0e53a4f.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.a2929766.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.dd094d23.js","_app/immutable/chunks/index.8f72f038.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

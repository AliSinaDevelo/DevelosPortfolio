export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set(["assets/cv/CurriculumVitae.aux","assets/cv/CurriculumVitae.log","assets/cv/CurriculumVitae.pdf","assets/cv/CurriculumVitae.synctex.gz","assets/cv/CurriculumVitae.tex","assets/cv/output/CurriculumVitae.pdf","assets/favicon.png","assets/particles.json"]),
	mimeTypes: {".log":"text/plain",".pdf":"application/pdf",".gz":"application/gzip",".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":"app/immutable/entry/start.B8IZq3gu.js","app":"app/immutable/entry/app.2dq76aJc.js","imports":["app/immutable/entry/start.B8IZq3gu.js","app/immutable/chunks/entry.CJ1F2oXi.js","app/immutable/chunks/scheduler.DGpLaggK.js","app/immutable/entry/app.2dq76aJc.js","app/immutable/chunks/scheduler.DGpLaggK.js","app/immutable/chunks/index.CbleGq3R.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

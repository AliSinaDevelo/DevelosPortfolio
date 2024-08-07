

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.CQ2qiyl9.js","app/immutable/chunks/scheduler.DGpLaggK.js","app/immutable/chunks/index.CbleGq3R.js","app/immutable/chunks/entry.CJ1F2oXi.js"];
export const stylesheets = [];
export const fonts = [];

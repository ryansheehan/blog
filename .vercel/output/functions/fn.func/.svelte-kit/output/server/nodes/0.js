import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.6e7a547e.js","_app/immutable/chunks/scheduler.dd094d23.js","_app/immutable/chunks/index.8f72f038.js","_app/immutable/chunks/index.a0e53a4f.js"];
export const stylesheets = ["_app/immutable/assets/0.2f73e2ab.css"];
export const fonts = [];

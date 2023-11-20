import * as universal from '../entries/pages/posts/_slug_/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/posts/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/3.7133e208.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.dd094d23.js","_app/immutable/chunks/index.8f72f038.js","_app/immutable/chunks/utils.6b43d8a2.js"];
export const stylesheets = ["_app/immutable/assets/3.27828ac3.css"];
export const fonts = [];

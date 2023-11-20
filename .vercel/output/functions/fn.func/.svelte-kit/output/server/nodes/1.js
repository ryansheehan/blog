

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.215f1d84.js","_app/immutable/chunks/scheduler.dd094d23.js","_app/immutable/chunks/index.8f72f038.js","_app/immutable/chunks/singletons.19347f9f.js","_app/immutable/chunks/index.a0e53a4f.js"];
export const stylesheets = ["_app/immutable/assets/1.f870a4f1.css"];
export const fonts = [];

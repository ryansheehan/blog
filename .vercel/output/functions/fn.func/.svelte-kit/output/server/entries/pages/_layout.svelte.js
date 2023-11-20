import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/ssr.js";
import { t as theme } from "../../chunks/theme.store.js";
const global = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".site-wrapper.svelte-6jvtav{block-size:100vh;display:flex;flex-flow:column nowrap}.content-wrapper.svelte-6jvtav{flex:1 1 auto;display:flex;justify-content:center}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css);
  $$unsubscribe_theme();
  return `<div class="site-wrapper svelte-6jvtav"><header><h1><a href="/" data-svelte-h="svelte-2yx9zp">Ryan Sheehan</a><button>${escape($theme)}</button></h1></header> <div class="content-wrapper svelte-6jvtav"><main>${slots.default ? slots.default({}) : ``}</main></div> </div>`;
});
export {
  Layout as default
};

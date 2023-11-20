import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
import { f as formatDate } from "../../../../chunks/utils.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-j4helu{margin-inline:auto}h1.svelte-j4helu{text-transform:capitalize}.tags.svelte-j4helu{display:flex}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return ` ${$$result.head += `<!-- HEAD_svelte-ylbs26_START -->${$$result.title = `<title>${escape(data.meta.title)}</title>`, ""}<meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", data.meta.title, 0)}><!-- HEAD_svelte-ylbs26_END -->`, ""} <article class="svelte-j4helu"> <hgroup><h1 class="svelte-j4helu">${escape(data.meta.title)}</h1> ${data.meta.date ? `<p>Published at ${escape(formatDate(data.meta.date))}</p>` : ``}</hgroup>  <div class="tags svelte-j4helu" data-svelte-h="svelte-12p8u5b"></div>  <div class="prose">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div> </article>`;
});
export {
  Page as default
};

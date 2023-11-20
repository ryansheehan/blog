import { d as dev } from "../../../../chunks/environment.js";
import { e as error } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const prerender = "auto";
async function load({ params }) {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../posts/demo-post2/index.md": () => import("../../../../chunks/index3.js").then((n) => n._), "../../../posts/demo-post3/index.md": () => import("../../../../chunks/index4.js").then((n) => n._) }), `../../../posts/${params.slug}/index.md`);
    if (!dev && !post.metadata?.publish) {
      throw error(404, `Could not find ${params.slug}`);
    }
    return {
      content: post.default,
      meta: post.metadata
    };
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`);
  }
}
export {
  load,
  prerender
};

import { c as create_ssr_component, d as add_attribute, b as each } from "./ssr.js";
const _TestJpg = {
  sources: {
    avif: "/_app/immutable/assets/test.f3c98dfe.avif 1x, /_app/immutable/assets/test.d4848ecc.avif 2x",
    webp: "/_app/immutable/assets/test.21ef4952.webp 1x, /_app/immutable/assets/test.3056e972.webp 2x",
    jpeg: "/_app/immutable/assets/test.f829fa56.jpg 1x, /_app/immutable/assets/test.ec1ee33d.jpg 2x"
  },
  img: {
    src: "/_app/immutable/assets/test.ec1ee33d.jpg",
    w: 640,
    h: 861
  }
};
const _TestJpgFlipTrueBlur2 = {
  sources: {
    avif: "/_app/immutable/assets/test.cef09142.avif 1x, /_app/immutable/assets/test.98a7a7a8.avif 2x",
    webp: "/_app/immutable/assets/test.b6e99767.webp 1x, /_app/immutable/assets/test.92e5cd2c.webp 2x",
    jpeg: "/_app/immutable/assets/test.97ed30e2.jpg 1x, /_app/immutable/assets/test.6faa0669.jpg 2x"
  },
  img: {
    src: "/_app/immutable/assets/test.6faa0669.jpg",
    w: 640,
    h: 861
  }
};
const metadata = {
  "title": "This is a Demo Post 2",
  "description": "Test data for posts",
  "date": "11/10/2023"
};
const Demo_post2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${typeof _TestJpg === "string" ? `<img${add_attribute("src", _TestJpg.img.src, 0)} alt="test" class="post-img"${add_attribute("width", _TestJpg.img.w, 0)}${add_attribute("height", _TestJpg.img.h, 0)}>` : `<picture>${each(Object.entries(_TestJpg.sources), ([format, srcset]) => {
    return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
  })} <img${add_attribute("src", _TestJpg.img.src, 0)} alt="test" class="post-img"${add_attribute("width", _TestJpg.img.w, 0)}${add_attribute("height", _TestJpg.img.h, 0)}></picture>`} ${typeof _TestJpgFlipTrueBlur2 === "string" ? `<img${add_attribute("src", _TestJpgFlipTrueBlur2.img.src, 0)} alt="test2" class="post-img"${add_attribute("width", _TestJpgFlipTrueBlur2.img.w, 0)}${add_attribute("height", _TestJpgFlipTrueBlur2.img.h, 0)}>` : `<picture>${each(Object.entries(_TestJpgFlipTrueBlur2.sources), ([format, srcset]) => {
    return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
  })} <img${add_attribute("src", _TestJpgFlipTrueBlur2.img.src, 0)} alt="test2" class="post-img"${add_attribute("width", _TestJpgFlipTrueBlur2.img.w, 0)}${add_attribute("height", _TestJpgFlipTrueBlur2.img.h, 0)}></picture>`} <p data-svelte-h="svelte-j4pul9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet accusantium ratione praesentium rerum blanditiis, earum, maiores cum mollitia aut aliquid, omnis odit sed veniam distinctio optio commodi nihil! Totam?</p> <h2 id="section-title-2" data-svelte-h="svelte-wb13jc">Section Title 2</h2> <p data-svelte-h="svelte-j4pul9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet accusantium ratione praesentium rerum blanditiis, earum, maiores cum mollitia aut aliquid, omnis odit sed veniam distinctio optio commodi nihil! Totam?</p> <h3 id="sub-section-2" data-svelte-h="svelte-1xye0ju">Sub Section 2</h3> <ul data-svelte-h="svelte-9ewn5l"><li>Banana</li> <li>Strawberry</li> <li>Blueberry</li></ul> <h3 id="another-sub-section-2" data-svelte-h="svelte-102corj">Another Sub Section 2</h3> <table data-svelte-h="svelte-dlhmp9"><thead><tr><th>Col</th> <th>Detail</th></tr></thead> <tbody><tr><td>+1</td> <td>👍</td></tr> <tr><td>-1</td> <td>👎</td></tr></tbody></table>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Demo_post2,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};

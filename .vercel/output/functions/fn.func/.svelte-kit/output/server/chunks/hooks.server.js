import { c as cookieKey, T as Theme, a as cookieDuration, t as theme, d as defaultTheme } from "./theme.store.js";
function sequence(...handlers) {
  const length = handlers.length;
  if (!length)
    return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
const handleTheme = async ({ event, resolve }) => {
  const { cookies } = event;
  const storedTheme = cookies.get(cookieKey) ?? "";
  let currentTheme = defaultTheme;
  if (storedTheme && storedTheme in Theme) {
    currentTheme = storedTheme;
  } else {
    const expireDate = /* @__PURE__ */ new Date();
    expireDate.setDate(expireDate.getDate() + cookieDuration);
    cookies.set(cookieKey, currentTheme, { expires: expireDate, httpOnly: false, secure: false });
  }
  theme.set(currentTheme);
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%theme%", currentTheme)
  });
};
const handle = sequence(
  handleTheme
);
export {
  handle
};

import { w as writable } from "./index2.js";
import cookies from "js-cookie";
import { f as get_store_value } from "./ssr.js";
var Theme = /* @__PURE__ */ ((Theme2) => {
  Theme2["light"] = "light";
  Theme2["dark"] = "dark";
  return Theme2;
})(Theme || {});
const defaultTheme = "light";
const cookieDuration = 365;
const cookieKey = "rs-theme";
let localTheme = defaultTheme;
const { subscribe, set } = writable(localTheme);
const setTheme = (newTheme) => {
  const currentTheme = get_store_value(theme);
  if (currentTheme !== newTheme) {
    cookies.set(cookieKey, newTheme, { expires: cookieDuration, sameSite: "Lax" });
    set(newTheme);
  }
};
const toggleTheme = () => {
  const currentTheme = get_store_value(theme);
  const newTheme = currentTheme === Theme.dark ? Theme.light : Theme.dark;
  setTheme(newTheme);
};
const theme = {
  subscribe,
  set: setTheme,
  toggle: toggleTheme
};
export {
  Theme as T,
  cookieDuration as a,
  cookieKey as c,
  defaultTheme as d,
  theme as t
};

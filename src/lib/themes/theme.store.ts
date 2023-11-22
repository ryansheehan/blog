import {browser} from '$app/environment';
import {writable, get} from 'svelte/store';
import {Theme, defaultTheme, cookieKey, themeAttr, cookieDuration} from './theme-types';
import cookies from 'js-cookie';

export {Theme} from './theme-types';

const setHtml = (theme: Theme) => {
    if(browser) {        
        const html = document.querySelector('html')! as HTMLElement;
        html.setAttribute(themeAttr, theme);                   
    }
}

let localTheme = defaultTheme;

if(browser) {
    const html = document.querySelector('html')! as HTMLElement;
    const attrTheme = html.getAttribute(themeAttr) ?? '';
    if (attrTheme && attrTheme in Theme) {
        localTheme = attrTheme as Theme;
    }
}

const {subscribe, set} = writable<Theme>(localTheme);

const setTheme = (newTheme: Theme) => {    
    const currentTheme = get(theme);    
    if (currentTheme !== newTheme) {
        setHtml(newTheme);
        cookies.set(cookieKey, newTheme, {expires: cookieDuration, sameSite: 'Lax'});
        set(newTheme);     
    }
}

const toggleTheme = () => {
    const currentTheme = get(theme);
    const newTheme = currentTheme === Theme.dark ? Theme.light : Theme.dark;
    setTheme(newTheme);
}

export const theme = {
    subscribe,
    set: setTheme,
    toggle: toggleTheme,
};

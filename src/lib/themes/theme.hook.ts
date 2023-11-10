import type {Handle} from '@sveltejs/kit';
import {Theme, cookieKey, defaultTheme, cookieDuration} from '$lib/themes/theme-types';
import {theme} from '$lib/themes/theme.store';

export const handleTheme:Handle = (async ({event, resolve}) => {
    const {cookies} = event;
    const storedTheme = cookies.get(cookieKey) ?? '';
    let currentTheme = defaultTheme;
    if(storedTheme && storedTheme in Theme) {
        currentTheme = storedTheme as Theme;
    } else {
        const expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + cookieDuration);
        cookies.set(cookieKey, currentTheme, {expires: expireDate, httpOnly: false, secure: false});        
    }

    theme.set(currentTheme);

    return resolve(event, {
        transformPageChunk: ({html}) => html.replace('%theme%', currentTheme),
    });
}) satisfies Handle;
import {theme} from './theme.store';
import type {Action} from 'svelte/action';

export const themeToggle: Action = (el) => {
    el.addEventListener('click', theme.toggle);

    return {
        destroy() {
            el.removeEventListener('click', theme.toggle);
        }
    }
}

import {dev} from '$app/environment';

export type Categories = 'sveltekit' | 'svelte'

export interface PostFrontMatter {
	title: string;
	description: string;
	date: string;

	published?: boolean;
	slug?: string; // get's filled dynamically
	author?: string;
	categories?: Categories[];
}

function validateStringParam(param: string | undefined | null) {
	return typeof param === 'string' && param.length > 0;
}

function validateStringDateParam(param: string | undefined | null) {
	if (typeof param === 'string') {
		if (Date.parse(param) !== Number.NaN) {
			return true;
		}
	}
	return false;
}

export function validatePostFrontMatter({title, description, date}: Partial<PostFrontMatter>) {
	if(dev) {
		return validateStringParam(title)		
		&& validateStringParam(description)
		&& validateStringDateParam(date);
	}

	return true;
}
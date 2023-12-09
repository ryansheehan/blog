import {dev} from '$app/environment';

export interface Image {
	default: {
		sources: {
			avif: string;
			webp: string;
			jpeg: string;
		},
		img: {
			src: string;
			w: number;
			h: number;
		}
	}
}

export type ImageExt = 'avif' | 'gif' | 'heif' | 'jpeg' | 'jpg' | 'png' | 'tiff' | 'webp';

export type Categories = 'sveltekit' | 'svelte'

export interface RawPostFrontMatter {
	title: string;
	description: string;
	date: string;	

	published?: boolean;	
	author?: string;
	categories?: Categories[];

	image?: {
		ext: ImageExt | string;
		alt?: string;
	}
}

export interface PostFrontMatter extends RawPostFrontMatter {	
	slug: string;
	published: boolean;	
}

function validateStringParam(param: string | undefined | null) {
	return typeof param === 'string' && param.length > 0;
}

function validateStringDateParam(param: string | undefined | null) {
	if (typeof param === 'string') {
		if (!Number.isNaN(Date.parse(param))) {
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
// Build-time helpers for media that may not exist yet.
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import manifest from '../data/media-manifest.json';

type Entry = { width: number; height: number; sizes: number[] };
const images = manifest as Record<string, Entry>;

const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

/** Prefix a public/ asset path with Astro's configured base URL (`/` or `/repo/`). */
export const assetUrl = (path: string) => `${baseUrl}${path.replace(/^\/+/, '')}`;

export const hasPublic = (file: string) => existsSync(join(process.cwd(), 'public', 'media', file));

export const imageEntry = (name: string): Entry | undefined => images[name];

/** URL of the largest WebP of an image, for posters. */
export const posterUrl = (name?: string) => {
  const e = name ? images[name] : undefined;
  return e ? assetUrl(`media/${name}-${Math.max(...e.sizes)}.webp`) : undefined;
};

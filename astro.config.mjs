import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

const site = process.env.ASTRO_SITE || 'https://example.vercel.app'; // [TODO] real domain; keep in sync with src/data/site.ts
const base = process.env.ASTRO_BASE || '/';

export default defineConfig({
  site,
  base,
  // React only for the ReactDrops islands (Fan Gallery, Topographic Flow), hydrated on demand
  integrations: [react()],
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  // model-viewer (~1MB) is a lazily imported chunk, only fetched when a 3D slot is visible
  vite: { build: { chunkSizeWarningLimit: 1200 } },
});

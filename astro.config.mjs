import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://radenazure.my.id/',
  integrations: [react(), astroImageTools, sitemap()]
});
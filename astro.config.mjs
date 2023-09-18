import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import rome from "astro-rome";
import critters from "astro-critters";
import compressor from "astro-compressor";

import sitemap from "astro-sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), rome(), critters(), compress(), compressor()]
});
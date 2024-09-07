import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import critters from "astro-critters";
import sitemap from "astro-sitemap";

const site = 'https://troywebdev.com';
// https://astro.build/config
export default defineConfig({
  site,
  integrations: [sitemap({xslUrl: site + '/assets/xsl/sitemap.xsl'}), critters(), compress()]
});

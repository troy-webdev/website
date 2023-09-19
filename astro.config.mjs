import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import rome from "astro-rome";
import critters from "astro-critters";
import sitemap from "astro-sitemap";

const site = 'https://troywebdev.com';
// https://astro.build/config
export default defineConfig({
  site,
  integrations: [sitemap({xslUrl: site + '/xsl/sitemap.xsl'}), rome(), critters(), compress()]
});
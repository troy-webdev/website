import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import sitemap from "astro-sitemap";
import playformInline from "@playform/inline";
import playformCompress from "@playform/compress";
import playformFormat from "@playform/format";

const site = 'https://troywebdev.com';
// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    sitemap({xslUrl: site + '/assets/xsl/sitemap.xsl'}),
    playformInline(),
    playformCompress(),
    playformFormat()
  ]
});

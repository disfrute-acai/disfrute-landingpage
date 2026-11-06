// @ts-check
import { defineConfig } from "astro/config";

// Publicado en Cloudflare Pages con dominio propio. SITE_URL se puede pisar desde las
// variables del proyecto en Cloudflare (por ej. para probar en el subdominio *.pages.dev).
export default defineConfig({
  site: process.env.SITE_URL || "https://disfrute-acai.com",
  base: process.env.BASE_PATH ?? "/",
});

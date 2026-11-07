# ¡Disfrute! Açaí — sitio web

Landing informativa de ¡Disfrute! Açaí en español (`/`), portugués (`/pt/`) e inglés (`/en/`): inicio, historia, menú, dónde encontrarnos y contacto.

- **Stack:** [Astro](https://astro.build) (sitio estático, sin JavaScript en el navegador) + CSS.
- **Hosting:** [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/) (solo archivos estáticos) en `disfrute-acai.com`, configurado en `wrangler.jsonc`. Cada push a `main` se publica solo.
- **CI:** GitHub Actions compila el sitio en cada PR (`.github/workflows/ci.yml`). Si el contenido no es válido, falla.
- **Contenido:** archivos de texto en `src/content/`, validados en el build (`src/content.config.ts`). Ver [COMO-EDITAR.md](COMO-EDITAR.md).

## Desarrollo

Requiere Node (ver `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321/
npm run build    # valida contenido + genera dist/
npm run preview
```

## Estructura

```
src/
├── content/
│   ├── textos/{es,pt,en}/  # Textos largos por idioma (hero, historia, acai)
│   ├── productos/          # Menú: un archivo por producto, nombre en 3 idiomas
│   ├── toppings.md
│   └── contacto.md
├── content.config.ts       # Esquema y validaciones del contenido
├── i18n.ts                 # Idiomas, rutas y textos fijos de la interfaz
├── components/             # Una sección por componente + Pagina.astro
├── layouts/Base.astro      # <head>, SEO, hreflang, Open Graph y CSP
├── pages/                  # index.astro (es) y [lang]/index.astro (pt, en)
└── styles/global.css       # Paleta y estilos
public/img/                 # Fotos, logos e ilustraciones (deco/)
```

## Puesta en marcha

### 1. Repo en la cuenta de ¡Disfrute!

El repo vive en la organización de GitHub de ¡Disfrute! (con **2FA obligatorio**).

### 2. Cloudflare Workers

Con la cuenta de Cloudflare del negocio (mail del negocio, 2FA activado):

1. Agregar el dominio: *Add a domain* → `disfrute-acai.com` → **Connect** → plan Free. En GoDaddy (*Servidores de nombres → Introduciré mis propios servidores de nombres*) poner los dos nameservers que da Cloudflare y esperar a que el dominio quede **Active**.
2. *Workers & Pages → Create application → Import a repository* → GitHub → organización `disfrute-acai`, **solo este repo**.
3. Configuración:

   | Campo | Valor |
   |---|---|
   | Project name | `disfrute-acai` (tiene que coincidir con `name` de `wrangler.jsonc`) |
   | Build command | `npm run build` |
   | Deploy command | `npx wrangler deploy` |
   | Root directory | `/` |

   La versión de Node se toma de `.nvmrc`.
4. *Settings → Build → Variables and secrets:* `PUBLIC_INDEXAR` = `false` mientras sea vista previa (ver abajo).

Los dominios `disfrute-acai.com` y `www.disfrute-acai.com` se conectan solos en cada deploy (`routes` de `wrangler.jsonc`), con DNS y certificado HTTPS. Falta, una sola vez, en el panel del dominio:

- *Rules → Redirect Rules →* plantilla **Redirect from WWW to root** (301).
- *SSL/TLS → Edge Certificates →* **Always Use HTTPS**.

Los headers de seguridad (CSP, HSTS, etc.) están en `public/_headers`.

## Vista previa vs. sitio definitivo

Por defecto el sitio se publica con `noindex` (no aparece en Google), porque las fotos y textos son provisorios. Cuando esté listo: en el Worker de Cloudflare, *Settings → Build → Variables and secrets* → `PUBLIC_INDEXAR` = `true` y volver a desplegar (*Deployments* → último build → *Retry build*).

## Marca

Todo sigue el *Brand Book ¡Disfrute!* (ago. 2025): paleta `#392054` / `#F3F1E9` / `#75B843` / `#000000`, logo principal (morado) solo sobre crema y versión blanca solo sobre morado, ilustraciones botánicas como marco y la firma "Abra sus alas y ¡Disfrute!" con las alas.

## Pendientes antes de publicar

- **Tipografías:** la marca usa Praliner (títulos) y Petita (textos). Se usan Josefin Sans y Nunito (OFL) como reemplazo hasta tener los archivos con **licencia web**; no extraerlas del PDF.
- **Traducciones:** revisar con los dueños el portugués e inglés (nombres de productos, lema "Abra suas asas…" / "Spread your wings…").
- **Precios del menú:** actualizados con la carta nueva (nov. 2026).
- **Fotos de producto:** las de açaí son recortes de Instagram en baja resolución; idealmente reemplazar por originales.
- **Textos de salud:** del banner del brand book se tomaron solo los datos nutricionales; se omitieron afirmaciones como "desintoxica" o "ayuda a perder peso": son afirmaciones de salud que no conviene publicar sin respaldo.

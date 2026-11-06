# ¡Disfrute! Açaí — sitio web

Landing informativa de ¡Disfrute! Açaí en español (`/`), portugués (`/pt/`) e inglés (`/en/`): inicio, historia, menú, dónde encontrarnos y contacto.

- **Stack:** [Astro](https://astro.build) (sitio estático, sin JavaScript en el navegador) + CSS.
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com) en `disfrute-acai.com`. Cada push a `main` se publica solo; cada PR genera una vista previa en `*.pages.dev`.
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

El repo vive en la cuenta de GitHub de uno de los dueños (con **2FA activado**) y el desarrollador es colaborador.

- *Settings → Branches:* proteger `main` contra force-push y borrado, y exigir que pase el check **CI / build**.

### 2. Cloudflare Pages

Con la cuenta de Cloudflare del negocio (mail del negocio, 2FA activado):

1. *Workers & Pages → Create → Pages → Connect to Git* → autorizar **solo este repo** (no "All repositories").
2. Configuración del build:

   | Campo | Valor |
   |---|---|
   | Project name | `disfrute-acai` |
   | Production branch | `main` |
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |

   La versión de Node se toma de `.nvmrc`.
3. *Settings → Variables and Secrets* (entorno **Production**): `PUBLIC_INDEXAR` = `false` mientras sea vista previa (ver abajo).

### 3. Dominio `disfrute-acai.com`

1. En Cloudflare: *Add a domain* → `disfrute-acai.com` → plan Free. Cloudflare muestra dos *nameservers*.
2. En el registrador donde se compró el dominio: reemplazar los nameservers por los de Cloudflare. Tarda de minutos a 24 h.
3. En el proyecto de Pages: *Custom domains* → agregar `disfrute-acai.com` y `www.disfrute-acai.com`. Cloudflare crea los registros DNS y el certificado HTTPS.
4. Redirigir `www` al dominio principal: *Rules → Redirect Rules → Redirect from WWW to root* (plantilla), código 301.
5. *SSL/TLS → Edge Certificates:* activar **Always Use HTTPS**.

Los headers de seguridad (CSP, HSTS, etc.) y el `noindex` de las URLs `*.pages.dev` están en `public/_headers`.

## Vista previa vs. sitio definitivo

Por defecto el sitio se publica con `noindex` (no aparece en Google), porque las fotos y textos son provisorios. Cuando esté listo: en Cloudflare, *Settings → Variables and Secrets* → `PUBLIC_INDEXAR` = `true` y *Deployments → Retry deployment* en el último deploy.

## Marca

Todo sigue el *Brand Book ¡Disfrute!* (ago. 2025): paleta `#392054` / `#F3F1E9` / `#75B843` / `#000000`, logo principal (morado) solo sobre crema y versión blanca solo sobre morado, ilustraciones botánicas como marco y la firma "Abra sus alas y ¡Disfrute!" con las alas.

## Pendientes antes de publicar

- **Tipografías:** la marca usa Praliner (títulos) y Petita (textos). Se usan Josefin Sans y Nunito (OFL) como reemplazo hasta tener los archivos con **licencia web**; no extraerlas del PDF.
- **Traducciones:** revisar con los dueños el portugués e inglés (nombres de productos, lema "Abra suas asas…" / "Spread your wings…").
- **Precios del menú:** actualizados con la carta nueva (nov. 2026).
- **Fotos de producto:** las de açaí son recortes de Instagram en baja resolución; idealmente reemplazar por originales.
- **Textos de salud:** del banner del brand book se tomaron solo los datos nutricionales; se omitieron afirmaciones como "desintoxica" o "ayuda a perder peso": son afirmaciones de salud que no conviene publicar sin respaldo.

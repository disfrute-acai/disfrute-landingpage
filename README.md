# ¡Disfrute! Açaí — sitio web

Landing informativa de ¡Disfrute! Açaí en español (`/`), portugués (`/pt/`) e inglés (`/en/`): inicio, historia, menú, dónde encontrarnos y contacto.

- **Stack:** [Astro](https://astro.build) (sitio estático, sin JavaScript en el navegador) + CSS.
- **Hosting:** GitHub Pages, publicado por GitHub Actions al hacer push a `main`.
- **Contenido:** archivos de texto en `src/content/`, validados en el build (`src/content.config.ts`). Ver [COMO-EDITAR.md](COMO-EDITAR.md).

## Desarrollo

Requiere Node (ver `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321/disfrute/
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

1. Crear el repo en la cuenta de GitHub de ¡Disfrute! (con 2FA activado) y sumar al desarrollador como colaborador.
2. La URL y el path se toman solos de GitHub Pages en el deploy (cuenta o dominio propio): no hay que tocar `astro.config.mjs`.
3. *Settings → Pages → Source:* **GitHub Actions**.
4. *Settings → Branches:* proteger `main` contra force-push y borrado.
5. Dominio propio (opcional): verificarlo en *Settings de la cuenta → Pages → Verified domains*, configurarlo en el repo y activar **Enforce HTTPS**.

## Vista previa vs. sitio definitivo

Por defecto el sitio se publica con `noindex` (no aparece en Google), porque las fotos y textos son provisorios. Cuando esté listo: *Settings → Secrets and variables → Actions → Variables* → crear `INDEXAR` = `true` y volver a correr el workflow.

## Marca

Todo sigue el *Brand Book ¡Disfrute!* (ago. 2025): paleta `#392054` / `#F3F1E9` / `#75B843` / `#000000`, logo principal (morado) solo sobre crema y versión blanca solo sobre morado, ilustraciones botánicas como marco y la firma "Abra sus alas y ¡Disfrute!" con las alas.

## Pendientes antes de publicar

- **Tipografías:** la marca usa Praliner (títulos) y Petita (textos). Se usan Josefin Sans y Nunito (OFL) como reemplazo hasta tener los archivos con **licencia web**; no extraerlas del PDF.
- **Traducciones:** revisar con los dueños el portugués e inglés (nombres de productos, lema "Abra suas asas…" / "Spread your wings…").
- **Precios del menú:** actualizados con la carta nueva (nov. 2026).
- **Fotos de producto:** las de açaí son recortes de Instagram en baja resolución; idealmente reemplazar por originales.
- **Textos de salud:** del banner del brand book se tomaron solo los datos nutricionales; se omitieron afirmaciones como "desintoxica" o "ayuda a perder peso": son afirmaciones de salud que no conviene publicar sin respaldo.

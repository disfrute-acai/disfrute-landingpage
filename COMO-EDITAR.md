# Cómo editar la página de ¡Disfrute!

Todo se edita desde **github.com**, sin instalar nada. Después de guardar, la página se actualiza sola en 1–2 minutos.

## Pasos generales

1. Entrá al repositorio en github.com.
2. Abrí el archivo que querés cambiar (ver la tabla de abajo).
3. Tocá el lápiz ✏️ (*Edit this file*).
4. Cambiá **solo el texto entre comillas** o después de los dos puntos.
5. Tocá **Commit changes** → **Commit changes**.

## Idiomas

La página está en **español** (`/`), **portugués** (`/pt/`) e **inglés** (`/en/`).

- **Textos largos** (frase principal, historia, açaí): hay un archivo por idioma en `src/content/textos/es/`, `textos/pt/` y `textos/en/`. Si cambiás uno, acordate de cambiar los otros dos.
- **Menú, toppings y horarios:** un solo archivo con los tres idiomas juntos (`es:`, `pt:`, `en:`). El **precio va una sola vez**.
- Si falta una traducción, la página no se publica y GitHub te avisa qué falta.

## Qué archivo cambia qué

| Quiero cambiar…                         | Archivo                                        |
| --------------------------------------- | ---------------------------------------------- |
| Frase principal y lema                  | `src/content/textos/<idioma>/hero.md`          |
| Nuestra historia                        | `src/content/textos/<idioma>/historia.md`      |
| Texto "Açaí, la superfruta" y sus fotos | `src/content/textos/<idioma>/acai.md`          |
| Un vaso o bowl del menú (nombre/precio) | `src/content/productos/<producto>.md`          |
| Lista de toppings y precio del extra    | `src/content/toppings.md`                      |
| Dirección, horarios, WhatsApp, Insta    | `src/content/contacto.md`                      |
| Fotos de productos                      | `public/img/productos/`                        |

## Reglas para no romper nada

- No borres las líneas `---` del principio.
- No borres las comillas `"` de los textos.
- Precios: solo el número, sin `$` (ej: `precio: 290`).
- Horarios: si un día está cerrado, no pongas `horas:` y aparece "Cerrado" en cada idioma.
- WhatsApp: solo números con código de país, sin `+` ni espacios (ej: `59899123456`).
- Instagram: solo el usuario, sin `@` (ej: `disfrute.acai`).

> Si algo queda mal, **la página no se rompe**: sigue mostrando la versión anterior y GitHub te manda un mail con el error. Corregí el archivo y guardá de nuevo.

## Cambiar un precio

Abrí el archivo del producto en `src/content/productos/` y cambiá el número de `precio:` (sin `$`).

## Agregar un producto al menú

Entrá a `src/content/productos/` → **Add file** → **Create new file**, llamalo por ejemplo `vaso-tropical.md` y pegá:

```markdown
---
nombre:
  es: "Vaso Tropical"
  pt: "Copo Tropical"
  en: "Tropical Cup"
categoria: "vasos"
detalle: "+ 4 toppings"
precio: 420
orden: 4
disponible: true
---
```

- `categoria`: tiene que ser `"vasos"`, `"bowls"`, `"extras"` o `"para-llevar"`. Define en qué bloque de la carta aparece.
- `orden`: en qué posición aparece (1 = primero).
- `disponible: false` lo oculta sin borrarlo.

## Toppings

En `src/content/toppings.md` cada topping lleva su nombre en los tres idiomas:

```markdown
frutas:
  - es: "Kiwi"
    pt: "Kiwi"
    en: "Kiwi"
```

Respetá los espacios del principio de cada línea: así sabe a qué grupo pertenece.

## Quitar un producto

Poné `disponible: false`, o borrá el archivo (menú `…` → **Delete file**).

## Fotos

- Formato JPG o WebP, idealmente de menos de 500 KB (se pueden achicar en <https://squoosh.app>).
- Fotos de açaí: verticales (3:4). Esencia: vertical (4:5).

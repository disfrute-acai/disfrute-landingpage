import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { existsSync } from "node:fs";
import { join } from "node:path";

// Valida que la foto exista en public/img/<carpeta>/ para que un nombre mal escrito
// frene el deploy en vez de publicar una imagen rota.
const foto = (carpeta: string) =>
  z.string().refine((archivo) => existsSync(join("public/img", carpeta, archivo)), {
    message: `La foto no existe en ${join("public/img", carpeta)}/`,
  });

const precio = z.number().positive("El precio va solo con números, sin $");

// Texto corto en los tres idiomas (los textos largos van en src/content/textos/<idioma>/).
const traducido = z.object({ es: z.string(), pt: z.string(), en: z.string() });
const textos = (archivo: string) => glob({ pattern: `{es,pt,en}/${archivo}`, base: "./src/content/textos" });

const hero = defineCollection({
  loader: textos("hero.md"),
  schema: z.object({
    titulo: z.string(),
    lema: z.string(),
    subtitulo: z.string(),
  }),
});

const historia = defineCollection({
  loader: textos("historia.md"),
  schema: z.object({
    titulo: z.string(),
    foto: foto("").optional(),
  }),
});

const acai = defineCollection({
  loader: textos("acai.md"),
  schema: z.object({
    titulo: z.string(),
    fotos: z.array(foto("productos")).max(2),
  }),
});

const productos = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/productos" }),
  schema: z.object({
    nombre: traducido,
    categoria: z.enum(["vasos", "bowls", "extras", "para-llevar"]),
    detalle: z.string().optional(),
    precio,
    orden: z.number().int().default(99),
    disponible: z.boolean().default(true),
  }),
});

const toppings = defineCollection({
  loader: glob({ pattern: "toppings.md", base: "./src/content" }),
  schema: z.object({
    salsas: z.array(traducido),
    secos: z.array(traducido),
    frutas: z.array(traducido),
    precio_extra: precio,
  }),
});

const contacto = defineCollection({
  loader: glob({ pattern: "contacto.md", base: "./src/content" }),
  schema: z.object({
    direccion: z.string(),
    ciudad: z.string(),
    // Sin `horas` = cerrado ese día.
    horarios: z.array(z.object({ dias: traducido, horas: z.string().optional() })),
    whatsapp: z.string().regex(/^\d{8,15}$/, "Solo números, con código de país (ej: 59899123456)"),
    mensaje_whatsapp: traducido,
    instagram: z.string().regex(/^[\w.]+$/, "Solo el usuario, sin @ ni link"),
  }),
});

export const collections = { hero, historia, acai, productos, toppings, contacto };

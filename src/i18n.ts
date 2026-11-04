import { ruta } from "./lib/url";

export const idiomas = ["es", "pt", "en"] as const;
export type Idioma = (typeof idiomas)[number];
export const idiomaPorDefecto: Idioma = "es";

export const nombresIdioma: Record<Idioma, string> = {
  es: "Español",
  pt: "Português",
  en: "English",
};

export const ogLocale: Record<Idioma, string> = {
  es: "es_UY",
  pt: "pt_BR",
  en: "en_US",
};

// Español en la raíz (/), los demás con prefijo (/pt/, /en/).
export const rutaIdioma = (lang: Idioma) => ruta(lang === idiomaPorDefecto ? "" : `${lang}/`);

// Textos fijos de la interfaz. El contenido editable vive en src/content/.
export const ui = {
  es: {
    nav: { esencia: "Nosotros", menu: "Menú", encontranos: "Encuentranos", contacto: "Contacto" },
    navAria: "Secciones",
    idiomaAria: "Idioma",
    inicioAlt: "¡Disfrute! — inicio",
    verMenu: "Ver el menú",
    visitanos: "Visitanos",
    historiaAlt: "El rincón amazónico de ¡Disfrute!, con hamaca, loro y tucán",
    acaiAlt: "Vaso de açaí de ¡Disfrute!",
    menuTitulo: "Nuestro menú",
    categorias: { vasos: "Vasos", bowls: "Bowls", extras: "Extras", "para-llevar": "Para llevar" },
    toppings: "Toppings",
    grupos: { salsas: "Salsas", secos: "Secos", frutas: "Frutas" },
    extra: "Toppings extra",
    cadaUno: "c/u",
    encontranos: "Encuentranos",
    horarios: "Horarios",
    cerrado: "Cerrado",
    comoLlegar: "Cómo llegar",
    mapa: "Mapa",
    contactoTitulo: "Escribinos",
    contactoTexto: "Consultas, pedidos o eventos: estamos a un mensaje.",
    whatsappAria: "Escribinos por WhatsApp",
  },
  pt: {
    nav: { esencia: "Sobre nós", menu: "Cardápio", encontranos: "Onde estamos", contacto: "Contato" },
    navAria: "Seções",
    idiomaAria: "Idioma",
    inicioAlt: "¡Disfrute! — início",
    verMenu: "Ver o cardápio",
    visitanos: "Visite-nos",
    historiaAlt: "O cantinho amazônico da ¡Disfrute!, com rede, papagaio e tucano",
    acaiAlt: "Copo de açaí da ¡Disfrute!",
    menuTitulo: "Nosso cardápio",
    categorias: { vasos: "Copos", bowls: "Bowls", extras: "Extras", "para-llevar": "Para viagem" },
    toppings: "Toppings",
    grupos: { salsas: "Caldas", secos: "Secos", frutas: "Frutas" },
    extra: "Toppings extras",
    cadaUno: "cada",
    encontranos: "Onde estamos",
    horarios: "Horários",
    cerrado: "Fechado",
    comoLlegar: "Como chegar",
    mapa: "Mapa",
    contactoTitulo: "Fale com a gente",
    contactoTexto: "Dúvidas, pedidos ou eventos: estamos a uma mensagem.",
    whatsappAria: "Fale com a gente pelo WhatsApp",
  },
  en: {
    nav: { esencia: "About", menu: "Menu", encontranos: "Find us", contacto: "Contact" },
    navAria: "Sections",
    idiomaAria: "Language",
    inicioAlt: "¡Disfrute! — home",
    verMenu: "See the menu",
    visitanos: "Visit us",
    historiaAlt: "The Amazonian corner at ¡Disfrute!, with a hammock, parrot and toucan",
    acaiAlt: "A cup of açaí from ¡Disfrute!",
    menuTitulo: "Our menu",
    categorias: { vasos: "Cups", bowls: "Bowls", extras: "Extras", "para-llevar": "To go" },
    toppings: "Toppings",
    grupos: { salsas: "Sauces", secos: "Crunchy", frutas: "Fruits" },
    extra: "Extra toppings",
    cadaUno: "each",
    encontranos: "Find us",
    horarios: "Opening hours",
    cerrado: "Closed",
    comoLlegar: "Get directions",
    mapa: "Map",
    contactoTitulo: "Get in touch",
    contactoTexto: "Questions, orders or events: we're just a message away.",
    whatsappAria: "Message us on WhatsApp",
  },
} satisfies Record<Idioma, unknown>;

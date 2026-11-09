import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const stallions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stallions' }),
  schema: z.object({
    name: z.string(),
    order: z.number().default(0),
    badge: z.string().optional(), // es. "19M SIRE"
    tagline: z.string().optional(), // es. "No Comparison"
    description: z.string().optional(), // es. "2006 Sorrel Stallion"
    sire: z.string().optional(),
    dam: z.string().optional(),
    photo: z.string().optional(),
    graphic: z.string().optional(), // grafica 4:5 mostrata in home
    cardPhoto: z.string().optional(), // foto verticale per le card della pagina Stallions
    cardFocus: z.string().optional(), // punto focale del ritaglio, es. "30% 40%"
    lte: z.string().optional(), // lifetime earnings
    cardPedigree: z.string().optional(), // es. "Sire × Dam" mostrato sul retro della carta
    sireTitle: z.string().optional(), // es. "$21M Dollar Sire"
    honor: z.string().optional(), // es. "NRHA Hall of Fame"
    logo: z.string().optional(),
    tests: z.array(z.object({ label: z.string(), value: z.string(), group: z.string().optional() })).default([]),
    pedigreePdf: z.string().optional(),
    feesYear: z.string().optional(),
    fees: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    feesNote: z.string().optional(),
    subscriptions: z.array(z.string()).default([]),
    standingAt: z
      .object({
        name: z.string(),
        address: z.string().optional(),
        phone: z.string().optional(),
        website: z.string().optional(),
        logo: z.string().optional(),
      })
      .optional(),
    heroImage: z.string().optional(), // foto orizzontale a tutto schermo
    heroCard: z.string().optional(),
    heroLogo: z.string().optional(),
    heroLogoOverlay: z.string().optional(),
    heroLogoTop: z.string().optional(),
    heroLogoSide: z.enum(['left', 'right']).default('left'),
    heroCardPosition: z.string().optional(),
    heroPosition: z.string().optional(), // es. "70% 50%"
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    status: z.string().optional(), // es. "Standing"
    semen: z.array(z.string()).default([]), // es. ["Fresh", "Frozen", "ICSI"]
    breedingIntro: z.string().optional(),
    dealers: z.array(z.object({ name: z.string(), url: z.string() })).default([]), // concessionarie Europa
    passport: z
      .object({
        fullName: z.string().optional(),
        breed: z.string().optional(),
        color: z.string().optional(),
        born: z.string().optional(),
        height: z.string().optional(),
        owner: z.string().optional(),
        location: z.string().optional(),
      })
      .optional(),
    achievements: z.array(z.object({ year: z.string(), title: z.string() })).default([]),
    pedigreeTree: z
      .object({
        sire: z.string(), sireSire: z.string().optional(), sireDam: z.string().optional(),
        dam: z.string(), damSire: z.string().optional(), damDam: z.string().optional(),
      })
      .optional(),
    facebook: z.string().optional(),
    pedigreeLink: z.string().optional(),
    offspringLink: z.string().optional(),
    offspring: z.array(z.object({ name: z.string(), earnings: z.string(), photo: z.string().optional(), focus: z.string().optional() })).default([]),
    offspringNote: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    video: z.string().optional(), // ID video YouTube
    showRecord: z
      .array(z.object({ year: z.string(), event: z.string(), result: z.string() }))
      .default([]),
    sireRecord: z
      .array(z.object({ name: z.string(), detail: z.string().optional() }))
      .default([]),
  }),
});

const mares = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/mares' }),
  schema: z.object({
    name: z.string(),
    order: z.number().default(0),
    badge: z.string().optional(),
    years: z.string().optional(), // es. "2004 – 2023"
    damTitle: z.string().optional(), // es. "Million Dollar Dam"
    lte: z.string().optional(),
    offspring: z.string().optional(), // es. "$1,964,258 in offspring earnings"
    sire: z.string().optional(),
    dam: z.string().optional(),
    pedigree: z.string().optional(),
    photo: z.string().optional(),
    memorial: z.string().optional(), // locandina in memoriam
    achievements: z.array(z.object({ year: z.string(), title: z.string() })).default([]),
    pedigreeTree: z.object({ sire: z.string(), sireSire: z.string().optional(), sireDam: z.string().optional(), dam: z.string(), damSire: z.string().optional(), damDam: z.string().optional() }).optional(),
    pedigreeLink: z.string().optional(),
    video: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    bestOffspring: z.array(z.object({ name: z.string(), sire: z.string().optional(), earnings: z.string(), photo: z.string().optional(), focus: z.string().optional() })).default([]),
    offspringLink: z.string().optional(),
    profile: z.string().optional(), // es. "2009 · Sorrel"
    pedigreePdf: z.string().optional(),
    photoFocus: z.string().optional(), // es. "50% 30%"
    standalone: z.string().optional(), // es. "/lexi/": pagina dedicata, fuori dall'elenco fattrici
    facts: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
  }),
});

const records = defineCollection({
  loader: glob({ pattern: 'records.md', base: './src/content/records' }),
  schema: z.object({
    title: z.string(),
    honors: z.array(z.object({ year: z.string().optional(), text: z.string() })).default([]),
    futurity: z
      .array(z.object({ year: z.string(), horse: z.string(), rider: z.string(), photo: z.string().optional() }))
      .default([]),
    milestones: z
      .array(z.object({ year: z.string(), when: z.string().optional(), tag: z.string().optional(), title: z.string(), text: z.string() }))
      .default([]),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    intro: z.string().optional(),
    gallery: z
      .array(z.object({ image: z.string(), caption: z.string().optional(), group: z.string().optional() }))
      .default([]),
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
    // Pagina Contact
    contacts: z
      .array(
        z.object({
          label: z.string(),
          name: z.string(),
          lines: z.array(z.string()).default([]),
          phone: z.string().optional(),
          email: z.string().optional(),
        }),
      )
      .default([]),
    formEndpoint: z.string().optional(), // es. https://formspree.io/f/xxxx
    formEmail: z.string().optional(), // destinatario di riserva (mailto)
  }),
});

const about = defineCollection({
  loader: glob({ pattern: 'about.md', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    heroImage: z.string().optional(),
    bioEyebrow: z.string().optional(),
    bioTitle: z.string().optional(),
    portrait: z.string().optional(),
    bio: z.string(),
    preview: z.string().optional(), // testo breve per l'anteprima in home
    quote: z.string().optional(),
    quoteName: z.string().optional(),
    quoteRole: z.string().optional(),
    signature: z.string().optional(),
    milestoneYear: z.string().optional(),
    milestoneTitle: z.string().optional(),
    milestone: z.string().optional(),
    horses: z.array(z.object({ name: z.string(), achievement: z.string() })).default([]),
    horsesNote: z.string().optional(),
    programTitle: z.string().optional(),
    programImage: z.string().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    imagePosition: z.string().optional(), // CSS object-position, es. "50% 40%"
    summary: z.string().optional(),
  }),
});

const settings = defineCollection({
  loader: file('./src/content/settings/site.json'),
  schema: z.object({
    siteName: z.string(),
    tagline: z.string(),
    heroImage: z.string().optional(),
    logo: z.string().optional(),
    headlines: z.array(z.string()),
    features: z.array(
      z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        image: z.string().optional(),
        link: z.string().optional(),
      }),
    ),
    pageHeroes: z
      .object({
        about: z.string().optional(),
        stallions: z.string().optional(),
        mares: z.string().optional(),
        lexi: z.string().optional(),
        records: z.string().optional(),
        news: z.string().optional(),
        media: z.string().optional(),
        contact: z.string().optional(),
      })
      .optional(),
    accolades: z
      .object({
        title: z.string(),
        items: z.array(z.object({ value: z.string(), label: z.string() })),
      })
      .optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    instagram: z.string().optional(),
    credits: z.string(),
  }),
});

export const collections = { stallions, mares, pages, about, records, news, settings };

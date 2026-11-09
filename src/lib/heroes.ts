import { getEntry } from 'astro:content';

type HeroKey = 'about' | 'stallions' | 'mares' | 'lexi' | 'records' | 'news' | 'media' | 'contact';

/** Immagine hero di una pagina: quella scelta nel CMS, altrimenti la hero della home. */
export async function heroFor(key: HeroKey): Promise<string> {
  const site = (await getEntry('settings', 'site'))!.data;
  return site.pageHeroes?.[key] ?? site.heroImage ?? '/images/hero.jpg';
}

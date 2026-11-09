// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Cambia con il dominio definitivo
const site = 'https://arcesequarterhorses.com';

// Vecchi URL WordPress -> nuovi (mantiene SEO e link esterni)
export default defineConfig({
  site,
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  trailingSlash: 'always',
  redirects: {
    '/americasnextgunmodel-joins-elite-company-as-nrha-million-dollar-dam/': '/news/americasnextgunmodel-joins-elite-company-as-nrha-million-dollar-dam/',
    '/bald-face-faith/': '/news/bald-face-faith/',
    '/gunnatrashya-hits-nrha-milestone/': '/news/gunnatrashya-hits-nrha-milestone/',
    '/incredible-andiamoe-shawn-flarida-win-nrha-futurity/': '/news/incredible-andiamoe-shawn-flarida-win-nrha-futurity/',
    '/superstar-reiner-wimpys-little-chic-wears-new-crown/': '/news/superstar-reiner-wimpys-little-chic-wears-new-crown/',
    '/wimpys-little-chic-makes-her-mark-as-nrhas-newest-million-dollar-dam/': '/news/wimpys-little-chic-makes-her-mark-as-nrhas-newest-million-dollar-dam/',
    '/arcese/': '/about/',
    '/arcese-usa/': '/about/#moving-forward',
    '/arcese-mares/': '/mares/',
    '/our-mares/': '/mares/',
    '/gunnatrashya/': '/stallions/gunnatrashya/',
    '/gunnatrashya-show-record/': '/stallions/gunnatrashya/',
    '/gunnatrashya-sire-record/': '/stallions/gunnatrashya/',
    '/walla-walla-whiz/': '/stallions/walla-walla-whiz/',
    '/walla-walla-whiz-performance/': '/stallions/walla-walla-whiz/',
    '/walla-walla-whiz-sire-record/': '/stallions/walla-walla-whiz/',
    '/wimpys-little-chic/': '/lexi/',
    '/mares/wimpys-little-chic/': '/lexi/',
    '/mares/americasnextgunmodel/': '/mares/',
  },
});

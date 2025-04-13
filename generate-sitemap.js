import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://numlockitsolutions.co.in' });

const writeStream = createWriteStream('./public/sitemap.xml');

sitemap.pipe(writeStream);

[
  '/',
  '/home',
  '/about',
  '/Faq',
  '/Why',
  '/contact',
  '/privacy-policy',
].forEach(url => sitemap.write({ url }));

sitemap.end();

streamToPromise(sitemap).then(sm => console.log('✅ Sitemap created!'));

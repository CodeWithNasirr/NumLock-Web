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
  '/laptop-repair',
  '/Dell-laptop-service',
  '/Hp-laptop-service',
  '/Lenovo-laptop-service',
  '/Apple-laptop-service',
  '/Acer-laptop-service',
  '/privacy-policy',
  '/Samsung-laptop-service',
  '/Samsung-laptop-service',
  '/Samsung-laptop-service',
  '/Toshiba-laptop-service',
  '/Printer-service',
  '/Datarecover-service',
].forEach(url => sitemap.write({ url }));

sitemap.end();

streamToPromise(sitemap).then(sm => console.log('✅ Sitemap created!'));

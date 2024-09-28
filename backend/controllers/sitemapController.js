// controllers/sitemapController.js
const Model = require('../models/model'); // Importa el modelo de los blogs

const generateSitemap = async (req, res) => {
  try {

     // URLs estáticas que quieres incluir en el sitemap
     const staticUrls = [
        {
          loc: 'https://www.maestriaennegociosdigitales.com/',
          lastmod: new Date().toISOString(),
          changefreq: 'daily',
          priority: 1.0
        },
        {
          loc: 'https://www.maestriaennegociosdigitales.com/acerca',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.8
        },
        {
          loc: 'https://www.maestriaennegociosdigitales.com/contact',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.8
        },
        {
            loc: 'https://www.maestriaennegociosdigitales.com/main',
            lastmod: new Date().toISOString(),
            changefreq: 'monthly',
            priority: 0.8
          }

      ];


    const documents = await Model.find(); // Obtiene todos los documentos de la colección
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>`;
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;


    // Añade las URLs estáticas al sitemap
    staticUrls.forEach(url => {
        sitemap += `
          <url>
            <loc>${url.loc}</loc>
            <lastmod>${url.lastmod}</lastmod>
            <changefreq>${url.changefreq}</changefreq>
            <priority>${url.priority}</priority>
          </url>`;
      });


    // Genera URLs del frontend para cada documento
    documents.forEach(doc => {
      sitemap += `
        <url>
          <loc>https://www.maestriaennegociosdigitales.com/blog/${doc.keywords.replace(/ /g, '-')}</loc>
          <lastmod>${new Date(doc.lastUpdated).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`;
    });

    sitemap += `</urlset>`;
    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating sitemap');
  }
};

module.exports = {
  generateSitemap,
};

// routes/index.js
const express = require('express');
const router = express.Router();
const sitemapController = require('../controllers/sitemapController');

// Define la ruta para el sitemap
router.get('/sitemap.xml', sitemapController.generateSitemap);

module.exports = router;

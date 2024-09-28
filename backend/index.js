require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');
const Model = require('./models/model');
const PageModel = require('./models/pageModel');
const newsletterModel = require('./models/newsletterModel');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index');
const PORT = process.env.PORT || 3001;
const mongoUrl = process.env.MONGO_ATLAS_URL;


// Configuración de CORS
const corsOptions = {
  origin: 'https://www.maestriaennegociosdigitales.com',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: '5mb' }));

db(mongoUrl);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', routes);


app.get('/', async (req, res) => {
  try {
    const documents = await Model.find();
    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.get('/blog/:keywords', async (req, res) => {
  try {
    const keywords = req.params.keywords.replace(/-/g, ' '); // Reemplazar guiones con espacios
    const document = await Model.findOne({ keywords });
    res.json(document);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.post('/', async (req, res) => { 
  try {
    const newDocument = new Model(req.body);
    await newDocument.save();
    res.status(201).json(newDocument);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.put('/edit/:keywords', async (req, res) => {
  const { body, params } = req;
  try {
    const document = await Model.findOneAndUpdate(
      { keywords: params.keywords },
      { $set: body },
      { new: true }
    );
    if (!document) {
      return res.status(404).json({ error: 'Documento no encontrado' });
    }
    res.json(document);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.delete('/blog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Model.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog no encontrado' });
    }
    res.json({ message: 'Blog eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Rutas para landing pages
app.post('/landing-page', async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body); // Añadir este log
    const newDocument = new PageModel(req.body);
    await newDocument.save();
    res.status(201).json(newDocument);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


app.get('/landing-page', async (req, res) => {
  try {
    const documents = await PageModel.find();
    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Ruta para guardar solo los metadatos
app.put('/landing-page/metadata/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, keywords } = req.body;
    const updatedPage = await PageModel.findByIdAndUpdate(id, { title, description, keywords }, { new: true });
    if (!updatedPage) {
      return res.status(404).json({ error: 'Documento no encontrado' });
    }
    res.status(200).json(updatedPage);
  } catch (error) {
    console.error('Error al actualizar los metadatos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});



app.post('/save', async (req, res) => {
  try {
    const { html, css } = req.body;
    const newPage = new PageModel({ html, css });
    await newPage.save();
    res.status(201).json(newPage);
  } catch (error) {
    console.error('Error al guardar el contenido:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


app.get('/load/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const document = await PageModel.findById(id);
    if (!document) {
      return res.status(404).json({ error: 'Página no encontrada' });
    }
    res.json(document);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Endpoint para actualizar HTML y CSS de una landing page
app.put('/landing-page/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { html, css } = req.body;
    const updatedPage = await PageModel.findByIdAndUpdate(id, { html, css }, { new: true });
    if (!updatedPage) {
      return res.status(404).json({ error: 'Documento no encontrado' });
    }
    res.status(200).json(updatedPage);
  } catch (error) {
    console.error('Error al actualizar el contenido:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Ruta para obtener una página específica por keywords
app.get('/landingView/:keywords', async (req, res) => {
  try {
    const keywords = req.params.keywords.replace(/-/g, ' '); // Reemplazar guiones con espacios
    const document = await PageModel.findOne({ keywords });
    if (!document) {
      return res.status(404).json({ error: 'Página no encontrada' });
    }
    res.json(document);
  } catch (error) {
    console.error('Error interno del servidor:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


app.delete('/landingView/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLanding = await PageModel.findByIdAndDelete(id);
    if (!deletedLanding) {
      return res.status(404).json({ error: 'Blog no encontrado' });
    }
    res.json({ message: 'Blog eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Endpoints para Newlletter

// Guardar pagina
app.post('/save/newsletter', async (req, res) => {
  try {
    const { html, css } = req.body;
    const newPage = new newsletterModel({ html, css });
    await newPage.save();
    res.status(201).json(newPage);
  } catch (error) {
    console.error('Error al guardar el contenido:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Ruta para guardar solo los metadatos
app.put('/newsletter-page/metadata/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, keywords } = req.body;
    const updatedPage = await newsletterModel.findByIdAndUpdate(id, { title, description, keywords }, { new: true });
    if (!updatedPage) {
      return res.status(404).json({ error: 'Documento no encontrado' });
    }
    res.status(200).json(updatedPage);
  } catch (error) {
    console.error('Error al actualizar los metadatos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Ruta para obtener una página específica por keywords
app.get('/newsletter/:keywords', async (req, res) => {
  try {
    const keywords = req.params.keywords.replace(/-/g, ' '); // Reemplazar guiones con espacios
    const document = await PageModel.findOne({ keywords });
    if (!document) {
      return res.status(404).json({ error: 'Página no encontrada' });
    }
    res.json(document);
  } catch (error) {
    console.error('Error interno del servidor:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});




app.listen(PORT, () => console.log(`Servidor en funcionamiento en el puerto ${PORT}`));

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const featuredListings = require('./spark_api/getFeaturedListings');
const selectedListing = require('./spark_api/getSelectedListing');
const standardFieldMetadata = require('./spark_api/getStandardFieldMetaData');
const filteredListings = require('./spark_api/getFilteredListings');
const abcMail = require('./abc_mail');
const photoService = require('./abc_photo_service');

const app = express();
const PORT = process.env.PORT || 4040;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Endpoints
app.get('/getFeaturedListings', (req, res) => featuredListings.getFeaturedListings(res));
app.get('/getSelectedListing', (req, res) => selectedListing.getSelectedListing(res, req.query.id));
app.get('/getStandardFieldMetadata', (req, res) => standardFieldMetadata.getStandardFieldMetadata(res));
app.get('/getFilteredListings', (req, res) => filteredListings.getFilteredListings(res, req.query));
app.get('/getSimpleFilteredListings', (req, res) => filteredListings.getSimpleFilteredListings(res, req.query.searchText));
app.get('/getAbcListings', (req, res) => featuredListings.getAbcListings(res, req.query));
app.get('/sendMail', (req, res) => abcMail.sendIt(res, req.query));
app.get('/photoService', (req, res) => photoService.getPhotosFromDirectory(res, req.query));

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 
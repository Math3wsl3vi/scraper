const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

// Import routes
const scraperRoutes = require('./routes/scraper');
const matchRoutes = require('./routes/matches');
const teamVisualsRoutes = require('./routes/teamVisuals');
const logRoutes = require('./routes/logs');

// Import middleware
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-nuxt-frontend.com'] // Replace with your Nuxt app URL
    : ['http://localhost:3000'], // Default Nuxt dev port
  credentials: true
}));

// Logging
app.use(morgan('combined'));

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// API routes
const apiPrefix = process.env.API_PREFIX || '/api/v1';
app.use(`${apiPrefix}/scraper`, scraperRoutes);
app.use(`${apiPrefix}/matches`, matchRoutes);
app.use(`${apiPrefix}/team-visuals`, teamVisualsRoutes);
app.use(`${apiPrefix}/logs`, logRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV 
  });
});

// Error handling middleware (should be last)
app.use(errorHandler);

module.exports = app;
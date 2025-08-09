const app = require('./app');
const { testConnection } = require('./config/database');
const cronService = require('./services/cronService');

const PORT = process.env.PORT || 3001;

// Start server
const startServer = async () => {
  try {
    // Test database connection
    await testConnection();
    
    // Initialize cron jobs
    cronService.initializeCronJobs();
    
    // Start Express server
    app.listen(PORT, () => {
      console.log(`🚀 Calendar Scraper API running on port ${PORT}`);
      console.log(`📊 Environment: ${process.env.NODE_ENV}`);
      console.log(`🏠 Default venue: ${process.env.DEFAULT_VENUE}`);
    });
    
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
};

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received, shutting down gracefully');
  process.exit(0);
});

startServer();
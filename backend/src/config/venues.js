const venues = {
  // Current venue for testing (as per documentation)
  DEFAULT: process.env.DEFAULT_VENUE || 'Grøndal MultiCenter',
  
  // Updated venue string (use only after system verification)
  UPDATED: process.env.UPDATED_VENUE || 'Grøndal MultiCenter, lokale 28',
  
  // Additional venues can be added here
  ADDITIONAL_VENUES: [
    'Grøndal MultiCenter',
    'Grøndal MultiCenter, lokale 28'
    // Add more venues as needed
  ]
};

const scraperConstants = {
  // Link navigation levels
  LINK_LEVELS: {
    LEVEL_1: 'union',
    LEVEL_2: 'age_group', 
    LEVEL_3: 'pool',
    LEVEL_4: 'matches_list',
    LEVEL_5: 'match_details'
  },
  
  // Scraping configuration
  DEFAULT_DELAY: parseInt(process.env.SCRAPER_DELAY) || 2000,
  MAX_RETRIES: 3,
  REQUEST_TIMEOUT: parseInt(process.env.REQUEST_TIMEOUT) || 30000,
  MAX_CONCURRENT_REQUESTS: parseInt(process.env.MAX_CONCURRENT_REQUESTS) || 5,
  
  // Puppeteer settings
  PUPPETEER_OPTIONS: {
    headless: process.env.PUPPETEER_HEADLESS === 'true',
    timeout: parseInt(process.env.PUPPETEER_TIMEOUT) || 30000,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu'
    ]
  },
  
  // User agents for rotation
  USER_AGENTS: [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  ]
};

// Venue parsing helper
const parseVenueString = (venueInput) => {
  if (!venueInput) return [];
  
  // Split by semicolons or multiple spaces
  return venueInput
    .split(/[;]+|[\s]{2,}/)
    .map(venue => venue.trim())
    .filter(venue => venue.length > 0);
};

module.exports = {
  venues,
  scraperConstants,
  parseVenueString
};
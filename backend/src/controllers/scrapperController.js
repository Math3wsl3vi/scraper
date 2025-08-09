import scraperService from '../services/scraperService.js';

const scraperController = {
  async startScraper(req, res, next) {
    try {
      const result = await scraperService.runScraper();
      res.json({ success: true, message: 'Scraper started', data: result });
    } catch (err) {
      next(err);
    }
  },

  async getScraperStatus(req, res, next) {
    try {
      const status = await scraperService.getStatus();
      res.json({ success: true, status });
    } catch (err) {
      next(err);
    }
  }
};

export default scraperController;

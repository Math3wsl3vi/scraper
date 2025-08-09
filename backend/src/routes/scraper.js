import express from 'express';
import scraperController from '../controllers/scraperController.js';

const router = express.Router();

router.post('/start', scraperController.startScraper);
router.get('/status', scraperController.getScraperStatus);

export default router;

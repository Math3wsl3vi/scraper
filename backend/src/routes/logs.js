import express from 'express';
import logsController from '../controllers/logsController.js';

const router = express.Router();

router.get('/', logsController.getAllLogs);
router.get('/:id', logsController.getLogById);

export default router;

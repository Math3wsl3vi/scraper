import express from 'express';
import matchesController from '../controllers/matchesController.js';

const router = express.Router();

router.get('/', matchesController.getAllMatches);
router.get('/:id', matchesController.getMatchById);
router.post('/', matchesController.addMatch);
router.put('/:id', matchesController.updateMatch);
router.delete('/:id', matchesController.deleteMatch);

export default router;

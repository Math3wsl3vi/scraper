import express from 'express';
import teamVisualsController from '../controllers/teamVisualsController.js';

const router = express.Router();

router.get('/', teamVisualsController.getAllTeamVisuals);
router.post('/', teamVisualsController.addTeamVisual);
router.put('/:id', teamVisualsController.updateTeamVisual);
router.delete('/:id', teamVisualsController.deleteTeamVisual);

export default router;

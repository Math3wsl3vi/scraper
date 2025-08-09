import teamVisualsModel from '../models/teamVisualsModel.js';

const teamVisualsController = {
  async getAllTeamVisuals(req, res, next) {
    try {
      const visuals = await teamVisualsModel.findAll();
      res.json(visuals);
    } catch (err) {
      next(err);
    }
  },

  async addTeamVisual(req, res, next) {
    try {
      const visual = await teamVisualsModel.create(req.body);
      res.status(201).json(visual);
    } catch (err) {
      next(err);
    }
  },

  async updateTeamVisual(req, res, next) {
    try {
      const updated = await teamVisualsModel.update(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      next(err);
    }
  },

  async deleteTeamVisual(req, res, next) {
    try {
      await teamVisualsModel.remove(req.params.id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
};

export default teamVisualsController;

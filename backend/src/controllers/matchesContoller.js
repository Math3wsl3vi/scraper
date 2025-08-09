import matchesModel from '../models/matchesModel.js';

const matchesController = {
  async getAllMatches(req, res, next) {
    try {
      const matches = await matchesModel.findAll();
      res.json(matches);
    } catch (err) {
      next(err);
    }
  },

  async getMatchById(req, res, next) {
    try {
      const match = await matchesModel.findById(req.params.id);
      if (!match) return res.status(404).json({ message: 'Match not found' });
      res.json(match);
    } catch (err) {
      next(err);
    }
  },

  async addMatch(req, res, next) {
    try {
      const newMatch = await matchesModel.create(req.body);
      res.status(201).json(newMatch);
    } catch (err) {
      next(err);
    }
  },

  async updateMatch(req, res, next) {
    try {
      const updated = await matchesModel.update(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      next(err);
    }
  },

  async deleteMatch(req, res, next) {
    try {
      await matchesModel.remove(req.params.id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
};

export default matchesController;

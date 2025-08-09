import logsModel from '../models/logsModel.js';

const logsController = {
  async getAllLogs(req, res, next) {
    try {
      const logs = await logsModel.findAll();
      res.json(logs);
    } catch (err) {
      next(err);
    }
  },

  async getLogById(req, res, next) {
    try {
      const log = await logsModel.findById(req.params.id);
      if (!log) return res.status(404).json({ message: 'Log not found' });
      res.json(log);
    } catch (err) {
      next(err);
    }
  }
};

export default logsController;

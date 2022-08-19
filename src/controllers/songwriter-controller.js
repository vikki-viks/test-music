const songwriterService = require("../services/songwriter-service");

class SongwriterController {
  async createSongwriter(req, res, next) {
    try {
      const { name } = req.body;
      const songwriter = await songwriterService.createSongwriter({
        name,
      });
      return res.json(songwriter);
    } catch (error) {
      next(error);
    }
  }

  async getSongwriter(req, res, next) {
    try {
      const { id } = req.params;
      const songwriter = await songwriterService.getSongwriter({
        id,
      });
      return res.json(songwriter);
    } catch (error) {
      next(error);
    }
  }

  async getAllSongwriter(req, res, next) {
    try {
      const { limit, offset } = req.query;
      const songwriters = await songwriterService.getAllSongwriter({
        limit,
        offset,
      });
      return res.json(songwriters);
    } catch (error) {
      next(error);
    }
  }

  async deleteSongwriter(req, res, next) {
    try {
      const { id } = req.params;
      await songwriterService.deleteSongwriter({
        id,
      });
      return res.json({ status: "ok" });
    } catch (error) {
      next(error);
    }
  }

  async editSongwriter(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      await songwriterService.editSongwriter({
        id,
        name,
      });
      return res.json({ status: "ok" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new SongwriterController();

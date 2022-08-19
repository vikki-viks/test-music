const songService = require("../services/song-service");

class SongController {
  async createSong(req, res, next) {
    try {
      const { name, songwriterIds } = req.body;
      const song = await songService.createSong({
        name,
        songwriterIds,
      });
      return res.json(song);
    } catch (error) {
      next(error);
    }
  }

  async getSong(req, res, next) {
    try {
      const { id } = req.params;
      const song = await songService.getSong({
        id,
      });
      return res.json(song);
    } catch (error) {
      next(error);
    }
  }

  async getAllSong(req, res, next) {
    try {
      const { songwriterId, name, limit, offset, date } = req.query;
      console.log({ songwriterId, name });
      const song = await songService.getAllSong({
        songwriterId,
        name,
        limit,
        offset,
        date,
      });
      return res.json(song);
    } catch (error) {
      next(error);
    }
  }

  async deleteSong(req, res, next) {
    try {
      const { id } = req.params;
      await songService.deleteSong({
        id,
      });
      return res.json({ status: "ok" });
    } catch (error) {
      next(error);
    }
  }

  async editSong(req, res, next) {
    try {
      const { id } = req.params;
      const { name, songwriterIds } = req.body;
      const song = await songService.editSong({
        id,
        name,
        songwriterIds,
      });
      return res.json({ status: "ok" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new SongController();

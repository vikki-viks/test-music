const { Songwriter } = require("../models/models");
const checkName = require("../helpers/check-name");

class SongwriterService {
  async createSongwriter({ name }) {
    checkName(name);
    const songwriter = await Songwriter.create({
      name,
    });
    return songwriter;
  }

  async getSongwriter({ id }) {
    const songwriter = await Songwriter.findOne({
      where: {
        id,
      },
    });
    return songwriter;
  }

  async getAllSongwriter({ limit, offset }) {
    const songwriters = await Songwriter.findAll({
      limit: parseInt(limit) || 10,
      offset: parseInt(offset) || 0,
    });
    return songwriters;
  }

  async deleteSongwriter({ id }) {
    await Songwriter.destroy({ where: { id } });
  }

  async editSongwriter({ id, name }) {
    checkName(name);
    const songwriter = await Songwriter.update(
      {
        name,
      },
      { where: { id } }
    );
    return songwriter;
  }
}

module.exports = new SongwriterService();

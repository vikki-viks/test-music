const { Op } = require("sequelize");
const { Song, Song_Songwriter, Songwriter } = require("../models/models");

class SongService {
  async createSong({ name, songwriterIds }) {
    const song = await Song.create({
      name,
    });
    const songId = song.get("id");
    await Promise.all(
      songwriterIds.map((id) =>
        Song_Songwriter.create({ songId, songwriterId: id })
      )
    );

    return song;
  }
  async getSong({ id }) {
    console.log({ id });
    const song = await Song.findOne({
      where: { id },
    });
    return song;
  }

  async getAllSong({ songwriterId, name, limit, offset, date }) {
    let beginningOfTheDate;
    let endOfTheDate;

    if (date) {
      beginningOfTheDate = new Date(date);
      beginningOfTheDate.setHours(0);
      beginningOfTheDate.setMinutes(0);

      endOfTheDate = new Date(date);
      endOfTheDate.setHours(23);
      endOfTheDate.setMinutes(59);
    }

    const songs = await Song.findAll({
      where: {
        ...(name && { name: { [Op.like]: `%${name}%` } }),
        ...(songwriterId && {
          [`$${Songwriter.tableName}.id$`]: songwriterId,
        }),
        ...(date && {
          createdAt: {
            [Op.gte]: beginningOfTheDate,
            [Op.lte]: endOfTheDate,
          },
        }),
      },
      limit: parseInt(limit) || 10,
      offset: parseInt(offset) || 0,
      include: { model: Songwriter, as: Songwriter.tableName },
    });

    return songs;
  }

  async deleteSong({ id }) {
    await Song.destroy({ where: { id } });
  }

  async editSong({ id, name, songwriterIds }) {
    const song = await Song.update(
      {
        name,
      },
      { where: { id } }
    );

    await Song_Songwriter.destroy({ where: { songId: id } });

    await Promise.all(
      songwriterIds.map((songwriterId) =>
        Song_Songwriter.create({ songId: id, songwriterId })
      )
    );
  }
}

module.exports = new SongService();

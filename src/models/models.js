const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Song = sequelize.define("song", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

const Songwriter = sequelize.define("songwriter", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

const Song_Songwriter = sequelize.define(
  "Song_Songwriter",
  {},
  { timestamps: false }
);

Song.belongsToMany(Songwriter, { through: Song_Songwriter });
Songwriter.belongsToMany(Song, { through: Song_Songwriter });
Song.belongsToMany(Songwriter, { through: Song_Songwriter });
Songwriter.belongsToMany(Song, { through: Song_Songwriter });

module.exports = {
  Song,
  Songwriter,
  Song_Songwriter,
};

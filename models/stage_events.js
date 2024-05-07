"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StageEvent extends Model {

    static associate({ Band, Event, Stage }) {

      StageEvent.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band",
      });
      StageEvent.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event",
      });
      StageEvent.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  }
  StageEvent.init(
    {
      stage_events_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      stage_id: DataTypes.SMALLINT,
      event_id: DataTypes.SMALLINT,
      band_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'StageEvent',
      tableName: 'stage_events',
      timestamps: false,
    }
  );
  return StageEvent;
};

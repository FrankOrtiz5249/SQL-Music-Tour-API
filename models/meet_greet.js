'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_Greet extends Model {
    static associate ({ Band, Event }) {
      // band
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // event
      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
    }
  }
  Meet_Greet.init({
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    meet_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    meet_end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Meet_Greet',
    tableName: 'meet_greet',
    timestamps: false
  });
  return Meet_Greet;
};
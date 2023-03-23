'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate({ QA }) {
      this.hasMany(QA, { foreignKey: 'topic_id' });
    }
  }
  Topic.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Topic',
    }
  );
  return Topic;
};

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class QA extends Model {
    static associate({ Topic }) {
      this.belongsTo(Topic, { foreignKey: 'topic_id' });
    }
  }
  QA.init(
    {
      questions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      answers: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      topic_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Topics',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'QA',
    }
  );
  return QA;
};

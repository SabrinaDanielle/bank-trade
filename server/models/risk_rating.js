/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('risk_rating', {
    rating: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    limit_effect: {
      type: DataTypes.ENUM('deduction','increase'),
      allowNull: false
    },
    percent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      primaryKey: true
    }
  }, {
    tableName: 'risk_rating'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('total_assets', {
    bank_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      references: {
        model: 'bank_name',
        key: 'bank_id'
      }
    },
    total_assets: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    CURRENT_TIMESTAMP: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'total_assets'
  });
};

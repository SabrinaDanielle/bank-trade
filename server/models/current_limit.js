/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('current_limit', {
    approval_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'bank_name',
        key: 'bank_id'
      }
    },
    credit_limit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      references: {
        model: 'risk_rating',
        key: 'rating'
      }
    },
    approved_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'current_limit'
  });
};

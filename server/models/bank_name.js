/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bank_name', {
    bank_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    approved: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'bank_name'
  });
};

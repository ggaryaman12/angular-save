'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nuvertos_compounds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    TOJSON(){
      return { ...this.get(), id:undefined}
    }
  }
  nuvertos_compounds.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: DataTypes.STRING,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    tableName: "nuvertos_compounds",
    modelName: 'nuvertos_compounds',
  });
  return nuvertos_compounds;
};
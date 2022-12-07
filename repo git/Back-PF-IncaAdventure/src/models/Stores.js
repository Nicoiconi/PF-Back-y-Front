const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Stores', {
    name: {
      // que venga automatico del front con algun formato de datos
      type: DataTypes.STRING,
      allowNull: false
    },
    shopping_cart: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: []
    },
    payments_records: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: []
    },
    disability: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      // de ser true pedir especificaciones
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};

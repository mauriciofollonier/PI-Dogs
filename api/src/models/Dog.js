const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      
    },
    weight: {
      type: DataTypes.INTEGER,
      
    },
    life_span: {
      type: DataTypes.INTEGER
    },
    image:{
      type: DataTypes.STRING
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, 
  {
    timestamps: false
  });
};

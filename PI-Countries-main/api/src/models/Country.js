const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [3,3],
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
      
    },
    
    flagpic: {
      type: DataTypes.STRING,
      allowNull: false,
      isUrl: true
    },
    continent: {
      type: DataTypes.ENUM('North America', 'South America', 'Europe', 'Africa', 'Asia', 'Oceania', 'Antarctica'),
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
     
    },
    subregion: {
      type: DataTypes.STRING,
      defaultValue: 'Other'
     
    },
    area: {
      type: DataTypes.INTEGER,
      defaultValue: 0
     
    },
    population: {
      type: DataTypes.INTEGER,
      defaultValue: 0
     
    }
  
  });
};

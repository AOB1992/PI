const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoincrement: true,
      },

    name: {
      type: DataTypes.STRING,
      defaultValue: 'Tourism Activity'
      
    },
    
    dificulty: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      validate: {
        min: 1,
        max: 5
       }
      
    },
    duration: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        validate: {
            min: 1
    
           }
        
      },
      season: {
        type: DataTypes.ENUM('Summer', 'Winter', 'Spring', 'Autumn'),
        defaultValue: 'Summer'
      },
      list: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      }
  
  });
};
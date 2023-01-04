const api = 'https://restcountries.com/v3/all'
const api2 = 'https://restcountries.com/v3.1/name/australia'
const apiname = 'https://restcountries.com/v3.1/name/'
const axios = require("axios");
const { getApiCountries, loadApiCountries, getCountries3, getCountry, getApiCountry, getDbCountry } = require("../utils");
const { Activity, Country} = require("../db"); //database
const { Sequelize, ARRAY } = require('sequelize');

const postActivities = async (req, res) => {
    //should check all data receivded is ok
    const { id, namename, dificulty, duration, season, countriestoadd} = req.body
    console.log('***********entradno a POST ACTIVITIES Y countries es...')
    console.log(countriestoadd)
    try {
        //CREATE ACTIVITY ORIGINAL QUE FUNCIONA
        let newactivity = await Activity.create({
            id: id, name: namename, dificulty: dificulty, duration: duration, season: season, list: countriestoadd
            //id, name: name, dificulty, duration, season, list: countriestoadd
        })
        // FIN DE CREATE ACTIVITY ORIGINAL QUE FUNCIONA
        //INCIO NUEVO CREATE ACTIVITY
            //asocio
            // let peru = await Country.findByPk('PER')
            // peru.addActivity(newactivity)
            newactivity.addCountries(countriestoadd)
                    // let peru = await Country.findByPk('PER')
                    // await peru.createActivity({
                    //     id, name, dificulty, duration, season
                    // })
                    // let response = await peru.getActivities()
                    // console.log('activities de PEru...')
                    // console.log(response)
        //FIN DE NUEVO CREATE ACTIVITY
        .then (() => {
            let objresponse = { //backend response is an object
                status: 'accepted',
                message: 'Activity created',
                data: {id, namename, dificulty, duration, season, countriestoadd}
            }
            res.status(200).send(objresponse )  
        })
       
    } catch (error) {
        let objresponse = { //backend response is an object
            status: 'error',
            message: error.message,
            data: undefined
        }
        res.status(404).send(objresponse)   
    }
//res.status(200).send('Post activities')
}

module.exports = {
    postActivities
  };
const api = 'https://restcountries.com/v3/all'
const api2 = 'https://restcountries.com/v3.1/name/australia'
const apiname = 'https://restcountries.com/v3.1/name/'
const axios = require("axios");
const { getApiCountries, loadApiCountries, getCountries3, getCountries33, getCountry, getApiCountry, getDbCountry } = require("../utils");
const { Activity, Country} = require("../db"); //database
const { Sequelize, ARRAY } = require('sequelize');

const getActivities = async (req, res) => {
    try {
        let reta =  await Activity.findAll()
        //res.status(200).send('get activities andando')
        res.status(200).send(reta)
    } catch (error) {
            res.status(404).send(error.message)
    }
}
const getCountriesLike = async (req, res) => {

    res.status(200).send('countries like')
}

const getCountry5 = async (req, res) => {
    console.log('entro a getcountry5')
    const country = req.params.country
    const apiroute = apiname + country
    let countrylowercase = country.toLowerCase()
    //const countryData = await
    const response = await getDbCountry(countrylowercase)
   //res.status(200).send('solicito un country' + country )
    res.status(200).send(response )

}

const getCountriesWithoutQuery = async (req, res) => {
    let reta =  await Country.findAll()
    //const response = await getApiCountries()
    //check if data is loaded
    var responsedb
    if(reta[0]) {
    }else{
         loadApiCountries()
         await Promise.all (reta =  await Country.findAll())
    }  
    responsedb = await getCountries3(reta)
        return res.status(200).send(responsedb)
}


const getCountries = async (req, res) => {  
    console.log('entrando a countries...')
        try {
    if (Object.entries(req.query).length === 0) { //if it is an all countries request
        let reta =  await Country.findAll()
        //const response = await getApiCountries()
        //check if data is loaded
        var responsedb
        if(reta[0]) {
        }else{
             loadApiCountries()
             await Promise.all (reta =  await Country.findAll())
        }  
        // console.log('resúesta de la DB findall...')
        // console.log(reta)
        responsedb = await getCountries3(reta) //tocado aca
        // console.log('resúesta de await getCountries3(reta)...')
        // console.log(responsedb )
        let objresponse = { //backend response is an object
            status: 'accepted',
            message: 'Array of countries found sent',
            data: responsedb
        }
            return res.status(200).send(objresponse)      
    }else{//if it is an specific country request
        //START OF ELSE
        if(req.query.name){
            console.log('hay name y es ' + req.query.name)
            let lowercasequery = req.query.name
            lowercasequery = lowercasequery.toLowerCase()
            const datacountrybrut = await Country.findAll({
                where: {
                    name:  { [Sequelize.Op.like]: `${lowercasequery}%`},
                }
            })
            //make array
            console.log('el datacountrylike es...')
            var array = [] //array is an array with all the countries alike
            let arr = datacountrybrut.map( (x) => {
                array.push(x.dataValues)                
            })
        }
if (array.length > 0) {
    let objresponse = { //backend response is an object
        status: 'accepted',
        message: 'List of countries found',
        data: array
    }
    res.status(200).send(objresponse)
}else{
    let objresponse = { //backend response is an object
        status: 'accepted',
        message: 'No countries found',
        data: undefined
    }
    res.status(200).send(objresponse)
}

//END of ELSE
    }
} catch (error) {//here goes catch errror
            res.status(404).send(error.message)
}
}//end of function


const loadCountries = async (req, res) => {

}

module.exports = {
    getCountries,
    getCountry5,
    getCountriesLike,
    getActivities
  };
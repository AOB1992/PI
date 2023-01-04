const axios = require("axios");
const api = 'https://restcountries.com/v3/all'
const api2 = 'https://restcountries.com/v3.1/name/australia'
const apiname = 'https://restcountries.com/v3.1/name/'
const { Activity, Country} = require("../db");

// let objresponse = { //backend response is an object
//     status: 'accepted',
//     message: 'Array of countries found sent',
//     data: allCountriesClean
// }

//conectar a database

const getCountry5 = async (data) => {
    //should check for data to be correct

}

const getDbCountry = async (data) => {
    data = data.toLowerCase()
    console.log('entro a getDBCountry ' + data)

const datacountrybrut = await Country.findAll({
    include: Activity,
    where: {
        name: data
    }
})

//const activitiesbackresponse = await datacountrybrut.getActivities()
//console.log('datacountry es...')
//console.log(datacountrybrut)

let datacountry = datacountrybrut[0]
//control error if country does not exist
if (datacountry){
}else{
    let objresponse = { //backend response is an object
        status: 'error',
        message: 'Country not found',
        data: undefined
    }
    return objresponse
}
let peru = await Country.findByPk('PER')
let responseperu = await peru.getActivities()
console.log('*********respuestas peru...')
console.log(peru)
console.log(responseperu)
const responsecountry = {
    status: 'accepted',
    message: 'Country information sent',
    data: {
    id: datacountry.id,
    name: datacountry.name,
    flagpic: datacountry.flagpic,
    continent: datacountry.continent,
    capital: datacountry.capital,
    subregion: datacountry.subregion,
    area: datacountry.area,
    population: datacountry.population,
    activities: datacountry.activities
   
   
}
}
console.log('response country es...')
console.log(responsecountry)
return responsecountry
}

const getApiCountry = async (data) => {
    console.log('entrando a api country con ' + data)
    //should check for data received
    const apiroute = apiname + data
    const country = await axios.get(
        apiroute,
        {
          headers: {
            "accept-encoding": "*",
          },
        })
        let brutdata = country.data[0]
        console.log('brut data es...')
        console.log(brutdata)
        responsecapital = ''
        if (brutdata.capital) {
            if (brutdata.capital[0]) {
                var responsecapital =  brutdata.capital[0]
            }
        }
        let finalcountry = {
            id: brutdata.cca3,
                  name: brutdata.name.common,
                  flagpic: brutdata.flags[0],
                  continent: brutdata.continents[0],
                  capital: responsecapital,
                  subregion: brutdata.subregion,
                  area: brutdata.area,
                  population: brutdata.population,
                  activities: brutdata.activities
                 
        }

        return finalcountry
}

const getApiCountries = async () => {
    //get data from api
    const allCountriesBrut = await axios.get(
        api,
        {
          headers: {
            "accept-encoding": "*",
          },
        })
//
        const allCountries = allCountriesBrut.data
        //converting to database format
        const allCountriesClean = allCountries.map ( (country) => {

            responsecapital = ''
            //checking if there is capital
            if (country.capital) {
                if (country.capital[0]) {
                    var responsecapital =  country.capital[0]
                }
            }
//return data
            return {
                id: country.cca3,
                  name: country.name.common,
                  flagpic: country.flags[0],
                  continent: country.continents[0],
                  capital: responsecapital,
                  subregion: country.subregion,
                  area: country.area,
                  population: country.population,
                  
                  activities: [] //return nothing because in api there is nothing
            }
        })
        let objresponse = { //backend response is an object
            status: 'accepted',
            message: 'Array of countries found sent',
            data: allCountriesClean
        }
return objresponse
}

const getCountries3 = (carray) => {
    console.log('entrando a getCountries3')
    //check if carray is array
    if (carray){
        if(Array.isArray(carray)){

        }else{
            throw new Error('carray is not an array')
        }
    }else{
         throw new Error('there is no countries array to convert')
    }
    //check if there is all the data
    
  
   let newcountries = []

   carray.map ( (country) => {
    newcountries.push({
        name: country.name,
        flagpic: country.flagpic,
        continent: country.continent,
        id: country.id,
        population: country.population, //test changed
        activities: country.activities
        
    })
   })
loadApiCountries
return newcountries
}

async function loadApiCountries() {
    console.log('entro a loadCOuntries')
     //add to database
     allCountriesClean = await getApiCountries()
     console.log('allcountries clean es esto')
     //console.log(allCountriesClean)
// await allCountriesClean.forEach(async (country) => {
//     //NORMALIZE DATA
    
//     await Country.create({id: country.id, name: country.name, flagpic: country.flagpic, continent: country.continent, capital: country.capital, subregion: country.subregion, area: Math.floor(country.area), population: Math.floor(country.population)})    
// })
await allCountriesClean.data.map(async (country) => {
    let namelowercase = country.name.toLowerCase()
    await Country.create({id: country.id, name: namelowercase, test: "test", flagpic: country.flagpic, continent: country.continent, capital: country.capital, subregion: country.subregion, area: Math.floor(country.area), population: Math.floor(country.population), activities: []})    
})//

}//function end

const loadApiCountriesD = async () => {
    console.log('entro a loadCOuntries')
     //add to database
     allCountriesClean = getApiCountries()
allCountriesClean.forEach(async (country) => {
    Country.create({id: country.id, name: country.name, flagpic: country.flagpic, continent: country.continent, capital: country.capital, subregion: country.subregion, area: country.area, population: country.population, activities: []})    
})

}

module.exports = {
    getApiCountries,
    loadApiCountries,
    getCountries3,
    // getCountries33,
    getApiCountry,
    getDbCountry
  };
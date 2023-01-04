const { Router } = require("express");
const getsRouter = Router()
const { Activity, Country  } = require("../db");
const { getCountries, getCountry, getCountry5, getCountriesLike, getActivities} = require("../controllers/getsControllers")
getsRouter.get('/activities', getActivities)
getsRouter.get('/', getCountries)

getsRouter.get('/?', getCountriesLike)
getsRouter.get('/:country', getCountry5)

console.log('paso por gets ROuter')

module.exports = getsRouter;
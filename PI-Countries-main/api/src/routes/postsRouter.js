const { Router } = require("express");

const postsRouter = Router()

const { Activity, Country  } = require("../db");
const { getCountries, getCountry, getCountry5, getCountriesLike} = require("../controllers/postsControllers")
const { postActivities} = require("../controllers/postsControllers")

postsRouter.post('/', postActivities)

module.exports = postsRouter;
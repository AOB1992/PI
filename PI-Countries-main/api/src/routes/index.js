const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getsRouter = require("./getsRouter.js");
const postsRouter = require("./postsRouter.js");
const { getsControllers } = require("../controllers/getsControllers");
//const { getsControllers } = require("../controllers/postsControllers");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use ('/countries', getsRouter)
router.use ('/activities', postsRouter)
console.log ('paso por index')

module.exports = router;

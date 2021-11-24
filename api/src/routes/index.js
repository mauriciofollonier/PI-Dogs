const { Router } = require('express');
const dog = require('./dog.js');
const dogs = require ('./dogs.js');
const temperaments = require ('./temperaments.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dog', dog);
router.use('/dogs', dogs);
router.use('/temperaments', temperaments);

module.exports = router;

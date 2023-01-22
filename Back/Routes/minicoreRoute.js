const {Router}= require('express');
const { getAllClients, getAllContrats, getReport } = require('../Controllers/minicoreController');

const router = Router();


router.get('/clientes',getAllClients)
router.get('/contratos',getAllContrats)
router.post('/report',getReport)


module.exports = router;

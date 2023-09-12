const { Router } = require('express');
const Registry = require('../controllers/transactions');
const router = Router();

// creo una nueva instancia
const registry = new Registry();

// ruteo
router.post('/', registry.create);
router.get('/', registry.getAll);
router.get('/egress', registry.getEgressMonth);

module.exports = router;

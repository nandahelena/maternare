const express = require('express');
const gestanteController = require('../controllers/gestanteController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, gestanteController.listarGestantes);
router.get('/:id', authMiddleware, gestanteController.buscarGestante);
router.post('/', authMiddleware, gestanteController.criarGestante);

module.exports = router;

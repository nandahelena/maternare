const express = require('express');
const ligaController = require('../controllers/ligaController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, ligaController.listarLigas);
router.post('/', authMiddleware, ligaController.criarLiga);

module.exports = router;

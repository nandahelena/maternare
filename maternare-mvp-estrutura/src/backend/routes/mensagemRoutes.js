const express = require('express');
const mensagemController = require('../controllers/mensagemController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/historico/:usuarioId', authMiddleware, mensagemController.listarHistorico);
router.post('/', authMiddleware, mensagemController.enviarMensagem);

module.exports = router;

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRoutes = require('./routes/authRoutes');
const gestanteRoutes = require('./routes/gestanteRoutes');
const ligaRoutes = require('./routes/ligaRoutes');
const mensagemRoutes = require('./routes/mensagemRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || '*' }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', projeto: 'Maternarê', camada: 'backend-mvc' });
});

app.use('/api/auth', authRoutes);
app.use('/api/gestantes', gestanteRoutes);
app.use('/api/ligas', ligaRoutes);
app.use('/api/mensagens', mensagemRoutes);

app.use(errorHandler);

module.exports = app;

// app.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/activities', (_req, res) => {
  res.status(201).json({ message: 'Atividade registrada com sucesso!' });
});

module.exports = app;
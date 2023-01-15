// src/app.js

const express = require('express');
const { validateTeam, validateId } = require('./midlewares/midlewares');
const apiCredentials = require('./midlewares/apiCredentials');


const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
// require no nosso novo router
const teamsRouter = require('./routes/teamsRouter');

const app = express();
app.use(morgan('dev'));
app.use(express.static('/images'));
app.use(express.json());
// monta o router na rota /teams (1)
app.use('/teams', teamsRouter);


let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];


app.get('/teams', (req, res) => res.json(teams));

app.use(apiCredentials); /////
app.get('/teams/:id',validateId, (req, res, next) => {
    try {
        const { id } = req.params;
        const team = teams.find((team) => team.id === Number(id));
        res.status(200).json(team);
        
    } catch (error) {
        res.status(404).json({message: 'not found'})
    }
});

app.post('/teams', validateTeam, (req, res) => {
    if (
      // confere se a sigla proposta está inclusa nos times autorizados
      !req.teams.teams.includes(req.body.sigla)
      // confere se já não existe um time com essa sigla
      && teams.every((t) => t.sigla !== req.body.sigla)
    ) {
      return res.sendStatus(401);
    }
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
  });

app.put('/teams/:id', validateId,(req, res) => {
  const id = Number(req.params.id);
  const requiredProperties = ['nome', 'sigla'];
  const team = teams.find(t => t.id === id);
  if (team && requiredProperties.every((property) => property in req.body)) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

app.delete('/teams/:id',validateId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  }
  res.sendStatus(204);
});

app.use((err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;
const express = require('express');

// npm i eslint@6.8 eslint-config-trybe-backend@1.0 -D

const app = express();

app.use(express.json());

const teams = [
    {
      id: 1,
      name: 'São Paulo Futebol Clube',
      initials: 'SPF',
    },
    {
      id: 2,
      name: 'Clube Atlético Mineiro',
      initials: 'CAM',
    },
  ];
  
  app.get('/teams', (req, res) => res.status(200).json({ teams }));

  app.get('/teams/:id', (req, res) => {
    const idParam = req.params.id;
    const findTeam = teams.find((team) => team.id === Number(idParam));
    if (!findTeam) {
        res.status(404).json({ message: 'Not FOunt' });
    }
    res.status(200).json({ findTeam });
  });

  app.delete('/teams/:id', (req, res) => {
    const { id } = req.params;
    const arrayIndexDelete = teams.findIndex((team) => team.id === Number(id));
    teams.splice(arrayIndexDelete, 1);
    res.status(200).json({ message: 'Sucess' });
  });

  app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);
  
    res.status(201).json({ team: newTeam });
  });

  app.put('/teams/:id', (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;
  
    const updateTeam = teams.find((team) => team.id === Number(id));
  
    if (!updateTeam) {
      res.status(404).json({ message: 'Team not found' });
    }
  
    updateTeam.name = name;
    updateTeam.initials = initials;
    res.status(200).json({ updateTeam });
  });

module.exports = app;
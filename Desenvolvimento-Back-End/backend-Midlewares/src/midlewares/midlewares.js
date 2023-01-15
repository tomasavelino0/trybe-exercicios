const app = require('../app');

const teams = [
    { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
    { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
  ];


const validateTeam = (req, res, next) => {
    const requiredProperties = ['nome', 'sigla'];
    if (requiredProperties.every((property) => property in req.body)) {
      next();
    } else {
      res.sendStatus(400); 
    }
  };

  const validateId = (req, res, next) => {
    const id = Number(req.params.id);
    if (teams.some((team) => team.id === id)) { 
      next();
    } else {
      res.sendStatus(404);
    }
  }

  module.exports = { validateTeam, validateId };
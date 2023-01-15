const express = require('express');
const nameValidade = require('../midlewares/nameValidade');

const router = express.Router();
router.use(express.json());

const places = [{
    name: "Trekking",
    price: 0,
    description: {
      rating: 5,
      difficulty: "Fácil",
      createdAt: "10/08/2022"
    }},]

  let nextId = 1;

router.get('activities', (req, resp, next) => {
    resp.status(200).json({message: ' foi'})
});

router.post('/activities',nameValidade, (req, resp, next) => {
    const placeBody = req.body;
    const place = {id: nextId, ...placeBody};
    places.push(place);
    nextId += 1;
    resp.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});



module.exports = router;


// {
//     "name": "Trekking",
//     "price": 0,
//     "description": {
//       "rating": 5,
//       "difficulty": "Fácil",
//       "createdAt": "10/08/2022"
//     }
//   }
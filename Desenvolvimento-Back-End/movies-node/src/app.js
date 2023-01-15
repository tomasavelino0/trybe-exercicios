const express = require('express');

const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const readMovies = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

app.get('/movies/:id', async (req, res) => {
    try {
       const movies = await readMovies();
       const movie = movies.find(({ id }) => id === Number(req.params.id));
       res.status(200).json(movie);
     } catch (err) {
       res.status(500).send({ message: err.message });
     }
   });

app.get('/movies', async (req, res) => {
    try {
        const movies = await readMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.post('/movies', async (req, res) => {
    try {
      const { movie, price } = req.body;
      const movies = await readMovies();
        const newMovie = {
            id: movies[movies.length - 1].id + 1,
            movie,
            price,
        };
        const allMovies = JSON.stringify([...movies, newMovie]);
        await fs.writeFile(moviesPath, allMovies);
        res.status(200).json(newMovie);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readMovies();
    const movieIndex = movies.findIndex((film) => film.id === Number(id));
    console.log(movieIndex);
    console.log(Number(id));
    movies[movieIndex] = { id: Number(id), movie, price };
    const moviesUpdate = JSON.stringify(movies);
    await fs.writeFile(moviesPath, moviesUpdate);
    res.status(200).json(movies[movieIndex]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();
  const moviesFiltered = movies.filter((film) => film.id !== Number(id));
  const moviesUpdated = JSON.stringify(moviesFiltered);
  await fs.writeFile(moviesPath, moviesUpdated);
  res.status(204).json({ message: 'Filme Removido' });
});

module.exports = app;
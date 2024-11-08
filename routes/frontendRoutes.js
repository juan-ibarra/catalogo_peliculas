const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Página principal: lista de películas
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find(); // Obtiene las películas directamente desde la base de datos
        console.warn(`PELICULAS: ${movies}`);
        res.render('index', { movies: movies }); // Pasa la lista de películas a la vista
    } catch (error) {
        console.error(error);
        res.render('index', { movies: [] });
    }
});

// Formulario para añadir usuarios
router.get('/register', (req, res) => {
    res.render('addUser');
});

// Formulario para añadir películas
router.get('/add-movie', (req, res) => {
    res.render('addMovie');
});

// Formulario para editar una película (pasando el ID en la URL)
router.get('/edit-movie/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id); // Obtiene la película directamente desde la base de datos
        res.render('addMovie', { movie });
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const axios = require('axios');

// Página principal: lista de películas
router.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/api/movies');
        res.render('index', { movies: response.data });
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
        const response = await axios.get(`http://localhost:3000/api/movies/${req.params.id}`);
        res.render('addMovie', { movie: response.data });
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

module.exports = router;

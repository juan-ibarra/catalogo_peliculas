const express = require('express');
const { authMiddleware, adminMiddleware } = require('../auth/authMiddleware');
const {
    createMovie,
    getMovies,
    getMovieById,
    updateMovie,
    deleteMovie
} = require('../controllers/movieController');

const router = express.Router();

router.post('/', authMiddleware, adminMiddleware, createMovie);
//router.get('/', authMiddleware, getMovies);
router.get('/',  getMovies);
//router.get('/:id', authMiddleware, getMovieById);
router.get('/:id', getMovieById);
router.put('/:id', authMiddleware, adminMiddleware, updateMovie);
router.delete('/:id', authMiddleware, adminMiddleware, deleteMovie);

module.exports = router;

const Movie = require('../models/Movie');

exports.createMovie = async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
};

exports.getMovies = async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
};

exports.getMovieById = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Película no encontrada' });
    res.json(movie);
};

exports.updateMovie = async (req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!movie) return res.status(404).json({ message: 'Película no encontrada' });
    res.json(movie);
};

exports.deleteMovie = async (req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Película no encontrada' });
    res.json({ message: 'Película eliminada' });
};

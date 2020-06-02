const models = require('../database/models')
const movies = models.Movie;
const genres = models.Genre;
//const genres = require('../genres/');
const { check, validationResult, body } = require('express-validator');

const controller = {
    index : (req, res) => {
        movies.findAll().then(movies => {
            res.render('movies/index', { movies : movies });
        })
    },
    new : (req, res) => {
        genres.findAll().then(genres => {
            res.render('movies/new', {
                helper: require('../helpers/showErrors'),
                genres : genres, errors : req.session.errors, data : req.session.data
            });
        });
    },
    create : (req, res, next) => {
        movies.create({
            title : req.body.title,
            genre_id : parseInt(req.body.genre_id),
            awards : parseInt(req.body.awards),
            rating : parseFloat(req.body.rating),
            length : parseInt(req.body.length),
            release_date : req.body.release_date
        }).then(() => {
            res.redirect(202, '/movies/');
        });
    },
    edit : (req, res) => {
        const movie_id = req.params.id;
        const movie = movies.find(function (movie){
            return movie_id == movie.id;
        });
        res.render('movies/edit', { genres : genres, movie : movie });
    },
    save : (req, res) => {
        console.log(req.body)
        res.send(req.body);
    }
}

module.exports = controller;
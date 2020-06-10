const models = require('../database/models')
const movies = models.Movie;
const genres = models.Genre;
const db = require('../database/models');
//const genres = require('../genres/');
const { check, validationResult, body } = require('express-validator');

const limit = 3;

const controller = {
    index : (req, res) => {
        const page = (req.query.page) ? parseInt(req.query.page) : 1;
        db.Movie.findAndCountAll({
            limit : limit,
            offset : limit * (page - 1),
            include : ['genre']
        }).then(movies => {
            const count = movies.count;
            const pages = Math.ceil((count / limit));
            const data = { 
                movies : movies.rows,
                count : count,
                page : page,
                pages : pages
            };

            return res.render('movies/index', data);
        })
    },
    new : (req, res) => {
        db.Genre.findAll().then(genres => {
            return res.render('movies/new', {
                helper: require('../helpers/showErrors'),
                genres : genres, errors : req.session.errors, data : req.session.data
            });
        });
    },
    create : (req, res, next) => {
        let poster = '';
        console.log(req.file)
        if (req.file) {
            poster = req.file.filename;
        }

        db.Movie.create({
            title : req.body.title,
            awards : parseInt(req.body.awards),
            rating : parseFloat(req.body.rating),
            length : parseInt(req.body.length),
            releaseDate : req.body.releaseDate,
            genreId : req.body.genreId,
            poster : poster
        }).then(() => {
            return res.redirect('/movies/');
        });
    },
    edit : (req, res) => {
        const movie_id = req.params.id;
        const movie = db.Movie.find(function (movie){
            return movie_id == movie.id;
        });
        return res.render('movies/edit', { genres : genres, movie : movie });
    },
    save : (req, res) => {
        console.log(req.body)
        return res.send(req.body);
    }
}

module.exports = controller;
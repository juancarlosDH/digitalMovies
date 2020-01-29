
const db = require('../database/models');
//const genres = require('../genres/');
const { check, validationResult, body } = require('express-validator');

const limit = 9;

const controller = {
    index : (req, res) => {
        const page = (req.query.page) ? parseInt(req.query.page) : 1;
        db.Movies.findAndCountAll({
            limit : limit,
            offset : limit * (page - 1)
        }).then(movies => {
            const count = movies.count;
            const pages = parseInt(count / limit);
            
            const data = { 
                movies : movies.rows,
                count : count,
                page : page,
                pages : pages
            };

            res.render('movies/index', data);
        })
    },
    new : (req, res) => {
        db.Genres.findAll().then(genres => {
            res.render('movies/new', {
                helper: require('../helpers/showErrors'),
                genres : genres, errors : req.session.errors, data : req.session.data
            });
        });
    },
    create : (req, res, next) => {
        db.Movies.create({
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
        const movie = db.Movies .find(function (movie){
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
const Movie = require('../models/movie')

/*
//POST /movies: Accept Movie Data and Creates a Movie
router.post('/', movieCtrl.create)
// GET /movies: Returns a list of all movies.
router.get('/', movieCtrl. index)
// GET /movies/:id: Gets An Individual Movie
router.get('/:id', movieCtrl.show)
// POST /movies/:movieId/performers/:performerId
router.get('/:movieId/performers/:performerId'), movieCtrl.addPerformer
*/


exports.create = async function create(req, res) {
    try {
       const createdMovie = await Movie.create(req.body)
       res.status(200).json //json will be the created movie
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.index = async function index(req, res) {
    try {
        const foundMovies = await Movie.find({})
        res.status(200).json(foundMovies) //json will be the created movie
     } catch (error) {
         res.status(400).json({ message: error.message })
     }
}

exports.show = async function show(req, res) {
    try {
        const foundMovie = await Movie.findOne({ _id: req.params._id})
        res.status(200).json(foundMovie) //json will be the found movie
     } catch (error) {
         res.status(400).json({ message: error.message })
     }
}

exports.addPerformer = async function addPerformer(req, res) {

}


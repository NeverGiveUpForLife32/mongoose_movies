const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    mpaaRating: { type: String, required: true },
    cast: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Performer' }] //list of ids that all refer to a performer
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
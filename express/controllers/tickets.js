var mongoose = require('mongoose')
var ObjectId = mongoose.Types.ObjectId
const { TicketsModel } = require('../../mongo/models')

// 1. create a function called getAll that returns everything
const getAll = () => {
    return TicketsModel.find({})
}

// 2. create a function called createMovie that accepts a "movie" param
const createMovie = (movie) => {
    return TicketsModel.create(movie)
}

// 3. create a function called deleteMovie that accepts a "movieName" param
const deleteMovie = (movieName) => {
    return TicketsModel.deleteOne({movieName: movieName})
}

// 4. create a function called getById that accepts an "id" param and finds one ticket
// hint: in your db query, you will use objectId like this: ObjectId(id)
const getById = (id) => {
    return TicketsModel.findOne({_id: id})
}

module.exports = {
    getAll,
    createMovie,
    deleteMovie,
    getById
}
const express = require('express')
const router = express.Router()
const TicketsController = require('../controllers/tickets')

// Create a route for getting all movies/tickets from the db
// This corresponds to item 1 in the controller
router.get('/', (request, response) => {
    TicketsController.getAll()
        .then(results => response.json(results))
})

// Create a route for creating a movie
// This corresponds to item 2 in the controller
router.post('/', (request, response)=> {
    TicketsController.createMovie(request.body)
        .then(movie => response.json(movie))
})

// covers use case if user sends empty delete call
router.delete('/', (request, response) => {
    response.json({ err: 'fat idiot'})
})

// Create a route for deleting ONE movie by it's name
// This corresponds to item 3 in the controller
router.delete('/:name', (request, response) => {
    TicketsController.deleteMovie(request.params.name)
        .then(() => response.json({status: 'Movie deleted'}))
        .catch((err) => {
            console.log('BIG ERROR', err.message)
        })
})

// Create a route for getting ONE movie by it's id
// This corresponds to item 4 in the controller
router.get('/:id', (request, response) => {
    TicketsController.getById(request.params.id)
        .then((movie) => response.json(movie))
})

module.exports = router
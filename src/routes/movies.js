const { Router } = require('express')
const router = Router()
const movies = require('../sample.json')
const _ = require('underscore')

router.get('/',(req,res)=>{
    res.json(movies)
});
router.post('/',(req,res)=>{
    const { title, director, year, rating} = req.body
    if (title && director && year && rating) {
        const id = movies.length + 1;
        const newMovies = {...req.body, id};
        movies.push(newMovies)
        res.json(movies)
    } else {
        res.status(500).json({error: 'there was an error.'})
    }
})
router.put('/:id',(req,res)=>{
    const { id } = req.params
    const { title, director, year, rating} = req.body
    if (title && director && year && rating) {
        _.each(movies, (movie, i)=>{
            if(movie.id == id){
                movie.director = director
                movie.rating = rating
                movie.title = title
                movie.year = year
            }
        })
        res.json({movies})
    }else{
        res.status(500).json({error: 'there was an error.'})
    }
    
})
router.delete('/:id',(req,res)=>{
    const { id } = req.params
    _.each(movies, (movie, i )=>{
        if(movie.id == id){
            movies.splice(i, 1)
        }
    })
    res.send(movies);
})
module.exports = router
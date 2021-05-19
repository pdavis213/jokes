const Jokes = require('../models/jokes.model');

module.exports = {

getAllJokes(req, res) {
    console.log(res)
    Jokes.find()
        .then((allJokes) => res.json({allJokes: allJokes}))
        .catch((err) => res.json({message: "Unable to locate jokes", error:err}))
},

getOneJoke(req, res) {
    Jokes.find({_id: req.params.id})
    .then((oneJoke) => res.json({joke: oneJoke}))
    .catch((err) => res.json({message: "Unable to locate joke", error:err}))
},

createJoke(req, res) {
    Jokes.create(req.body)
    .then((newJoke) => res.json({joke: newJoke}))
    .catch((err) => res.json({message: "Unable to add joke", error:err}))
},

updateJoke(req, res) {
    Jokes.findByIdAndUpdate({_id: req.params.id }, req.body, { new: true })
        .then(updateJoke => res.json({joke: updateJoke}))
        .catch(err => res.json({message: "Unable to update", error:err}))
},

deleteJoke(req, res) {
    Jokes.findByIdAndDelete({_id: req.params.id })
        .then(result => req.json({result: result}))
        .catch(err => res.json({message: "Error: Couldn't bring myself to do it. Joke NOT deleted..", error:err}))
}

}

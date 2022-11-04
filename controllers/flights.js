const Flight = require('../models/flight')

module.exports = {
    index,
    show,
    new: newFlight,
    create
}

function index(req, res) {
    Flight.find({}, function(err, flights){
        if (err) return res.redirect('/')
        res.render('flights/index', {title: 'All Flights', flights})
    })
}
function show(req, res){
    Flight.find({}, function(err, flights){
        
        res.render('/flights/show', {Title: 'Flight Details', flights})
    })
}
function create(req, res){
    const flight = new Flight(req.body)
    flight.save(function(err){
        if (err) return res.redirect('/flights/new')
        console.log(flight)
        res.redirect(`/flights/${flight._id}`)
    })
}
function newFlight (req, res) {
    res.render('flights/new', {title: 'Add Flight'})
}
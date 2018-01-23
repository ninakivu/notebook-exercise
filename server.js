const
  express = require('express'),
  app = express(),
  // add installed packages
  mongoose = require('mongoose'),
  logger = require('morgan'),
  bodyParser = require('body-parser')
  // bring in the Notebook model:
  Notebook = require('./models/Notebook.js'),
  notebook = require('./controllers/notebook.js')

// connect to the packages downloaded:
mongoose.connect('mongodb://localhost/notebooks', function(err) {
  console.log(err || "Connected to MongoDB.")
})

app.use(logger('dev'))
app.use(bodyParser.json())

// set the root route:
app.get('/', function(req, res) {
  res.json({message: "This is the root route! Yay"})
})

// index:
app.get('/notebooks', notebook.index)

// create:
app.post('/notebooks', notebook.new)

// show:
app.get('/notebooks/:id', notebook.show)

// delete:
app.delete('/notebooks/:id', notebook.destroy)

// update:
app.patch('/notebooks/:id', notebook.update)

// set up the port:
app.listen(3000, function(err){
  console.log(err || "Server running on 3000.")
})
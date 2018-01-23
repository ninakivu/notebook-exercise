module.exports = {
  index: function(req, res){
    Notebook.find({}, function(err, allNotebooks){
      if(err) return console.log(err)
      res.json(allNotebooks)
    })
  },
  new: function(req,res) {
    Notebook.create(req.body, function(err, newNotebook){
      if(err) return console.log(err)
      res.json({message: "Notebook created.", notebook: newNotebook})
    })
  },
  show: function(req, res) {
    Notebook.findById(req.params.id, function(err, theNotebook){
      if(err) return console.log(err)
      res.json(theNotebook)
    })
  },
  destroy: function(req, res){
    Notebook.findByIdAndRemove(req.params.id, function(err, deletedNotebook){
      if(err) return console.log(err)
      res.json({message: "Notebook removed.", comment: deletedNotebook})
    })
  },
  update: function(req, res){
    Notebook.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedNotebook){
      if(err) return console.log(err)
      res.json({message: "Notebook updated.", notebook: updatedNotebook})
    })
  }
}
mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Rhine:Q6bYHucEINbZB2Mw@atlascluster.8pahoa1.mongodb.net/?retryWrites=true&w=majority')
    .then( app.listen(4500))
    .catch(err => console.log(err))
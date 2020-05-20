const mongoose = require('mongoose');

const dbConnect = async () => {
    try{
       mongoose.connect('mongodb://localhost/advertisersandbrands',
       {useNewUrlParser:true,
       useUnifiedTopology:true})
       console.log('db connected')
    }
    catch(err){
        throw err;
    }
}

module.exports = dbConnect;
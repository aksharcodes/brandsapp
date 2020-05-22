const mongoose = require('mongoose');

const dbConnect = async () => {
    try{
       mongoose.connect('mongodb+srv://akshar123:akshar123@brands-djmsr.mongodb.net/advertisersandbrands?retryWrites=true&w=majority',
       {useNewUrlParser:true,
       useUnifiedTopology:true})
       console.log('db connected')
    }
    catch(err){
        throw err;
    }
}

module.exports = dbConnect;
const express = require('express');
const config = require('config');
const path = require('path');

const app = express();

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname,'build')))

const port = process.env.PORT || config.get('PORT');

const dbConnect = require('./DBConenct');
dbConnect();

const brands = require('./router/brands');
app.use('/brands',brands)

app.listen(port,() => {console.log(`server started at port ${port}`)})


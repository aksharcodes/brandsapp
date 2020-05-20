const express = require('express');
const config = require('config');

const app = express();

const port = process.env.PORT || config.get('PORT');

const dbConnect = require('./DBConenct');
dbConnect();

const brands = require('./router/brands');
app.use('/brands',brands)

app.listen(port,() => {console.log(`server started at port ${port}`)})


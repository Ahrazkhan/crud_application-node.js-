//Ahraz khan
//So basically i started a small instagram startup with the name webvines , i have given the same name to this project .
//Github:https://github.com/Ahrazkhan
//i will be deploying  this app on heruko 

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "main_structure/css")))
app.use('/img', express.static(path.resolve(__dirname, "main_structure/img")))
app.use('/js', express.static(path.resolve(__dirname, "main_structure/js")))

// load routers
app.use('/', require('./server/routers/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
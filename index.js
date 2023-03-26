const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const userRouter = require('./routes/users');
const viewRouter = require('./routes/views');

const PORT = process.env.PORT || 3000;
const DBLINK = process.env.MONGODB;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/views', viewRouter);

mongoose.connect(DBLINK)
    .then(resp => {
        console.log('DB Connected');
        app.listen(PORT, () => {
            console.log("Server's running on port ", PORT);
        })
    }).catch(err => {
        console.log(err);
    })
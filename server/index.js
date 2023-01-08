require('dotenv').config();
require('./config/connection'); //Database connection
require('./config/passport-config'); //Passport initialization

const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require('./routes/routes');
const session = require('express-session');
const passport = require('passport');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
    secret: process.env.SECRETSESSION,
    saveUninitialized: true,
    resave: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', router);

app.listen(port, () => console.log(`Server running on port ${port}`));
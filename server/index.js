require('dotenv').config();
require('./config/connection'); //Database connection

const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require('./routes/routes');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
}));
app.use(session({
    key: 'user_cookie',
    secret: process.env.SECRETSESSION,
    saveUninitialized: true,
    resave: false,
    cookie: {
        sameSite: false,
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: false //Grab the cookie with javascript
    }
}));
app.use('/', router);

app.listen(port, () => console.log(`Server running on port ${port}`));
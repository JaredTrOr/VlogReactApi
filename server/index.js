require('dotenv').config();
require('./config/connection'); //Database connection

const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require('./routes/routes');
const session = require('express-session');
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
    secret: process.env.SECRETSESSION,
    saveUninitialized: true,
    resave: false
}));
app.use(cors());
app.use('/', router);

app.listen(port, () => console.log(`Server running on port ${port}`));
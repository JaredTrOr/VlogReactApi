require('dotenv').config();
require('./config/connection'); //Database connection

const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require('./routes/routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', router);

app.listen(port, () => console.log(`Server running on port ${port}`));
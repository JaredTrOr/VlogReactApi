require('dotenv').config();
require('./config/connection'); //Database connection

const express = require('express');
const app = express();
const port = process.env.PORT;
const postsRouter = require('./routes/posts');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/posts', postsRouter);
app.use('/', (req,res) => res.send('Welcome'));

app.listen(port, () => console.log(`Server running on port ${port}`));
const router = require('express').Router();
const postsRouter = require('./posts');
const userRouter = require('./user');

router.use('/posts', postsRouter);
router.use('/user', userRouter);

router.get('/', (req,res) => {
    res.send('Welcome to my server');
});
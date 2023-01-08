const router = require('express').Router();
const postsRouter = require('./posts');
const userRouter = require('./user');

router.use('/', userRouter);
router.use('/posts', postsRouter);

module.exports = router;
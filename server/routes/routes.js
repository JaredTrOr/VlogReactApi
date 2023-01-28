const router = require('express').Router();
const postsRouter = require('./posts');
const userRouter = require('./user');
const commentsRouter = require('./comments');

router.use('/', userRouter);
router.use('/posts', postsRouter);
router.use('/comments', commentsRouter);

module.exports = router;
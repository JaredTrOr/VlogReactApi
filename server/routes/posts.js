const router = require('express').Router();
const {
    getPosts,
    createPosts,
    getPostId,
    getPeoplePosts
} = require('../controllers/postsControllers');

router.get('/', getPosts);
router.get('/:id', getPostId);
router.post('/',createPosts);

module.exports = router;
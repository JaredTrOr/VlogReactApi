const router = require('express').Router();
const {
    getPosts,
    createPosts
} = require('../controllers/postsControllers');

router.get('/', getPosts);
router.post('/',createPosts);

module.exports = router;
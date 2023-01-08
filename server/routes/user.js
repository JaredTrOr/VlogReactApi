const router = require('express').Router();
const isRegister = require('../middlewares/isRegister');
const {
    createUser,
    getUsers
} = require('../controllers/userControllers');

router.get('/users', getUsers);
router.post('/register',isRegister,createUser);
router.post('/login');

module.exports = router;
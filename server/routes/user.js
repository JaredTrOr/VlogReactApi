const router = require('express').Router();
const isRegister = require('../middlewares/isRegister');
const passport = require('passport');
const {
    createUser,
    getUsers,
    login,
    getUserId,
    getSession
} = require('../controllers/userControllers');

router.get('/', getUsers);
router.get('/getSession', getSession);
router.get('/getUser/:id', getUserId);
router.post('/register',isRegister,createUser);
router.post('/login', login);

module.exports = router;
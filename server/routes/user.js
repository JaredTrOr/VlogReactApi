const router = require('express').Router();
const isRegister = require('../middlewares/isRegister');
const passport = require('passport');
const {
    createUser,
    getUsers
} = require('../controllers/userControllers');

router.get('/', getUsers);
router.post('/register',isRegister,createUser);
router.post('/login', passport.authenticate('local', {
    successFlash: true,
    failureFlash: true
}));

module.exports = router;
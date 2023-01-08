const LocalStrategy = require('passport-local').LocalStrategy
const passport = require('passport');
const bcrypt = require('bcrypt');
const {User} = require('../config/connection');

const fields = {
    usernameField: 'username',
    passwordField: 'password'
}

function initialization (){

    const authenticateUser = async (username, password, done) => {
        try{
            const user = await User.findOne({where: {username}});
            if(user){
                try{
                    if(await bcrypt.compare(password,user.password)){
                        return (null, user);
                    }
                    return done(null, false, {message: `Incorrect password`}); 
                }catch(err){
                    return done(err);
                }
            }

            return done(null, false, {message: `Incorrect username`});
        }catch(err){
            return done(err);
        }
    }

    passport.use(new LocalStrategy(fields, authenticateUser));

    passport.serializeUser((user,done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findByPk(id)
        .then(user => {
            done(null, user);
        })
        .catch(err => {
            done(err);
        });
    });
}

initialization();
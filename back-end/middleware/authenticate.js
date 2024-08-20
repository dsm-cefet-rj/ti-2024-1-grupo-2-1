var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Usuarios = require('../model/usuarios');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken'); // utiliza para criar, logar e verificar o token

var config = require('../config.js')

passport.use( new LocalStrategy({ usernameField: 'email', passwordField: 'senha' },
    function(email, senha, done) {
      Usuarios.authenticate()(email, senha, function(err, user, options) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: options.message });
        }
        return done(null, user);
      });
    }));
passport.serializeUser(Usuarios.serializeUser());
passport.deserializeUser(Usuarios.deserializeUser());

exports.getToken = function(user){
    return jwt.sign(user, config.secretKey,{expiresIn:3600});
}

var opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use( new JwtStrategy(opts, //cria um middleware com a estrategia do jsonToken
  async  (jwt_payload, done)=>{
        console.log('JWT payload: ', jwt_payload);
    try{

        const user = await Usuarios.findOne({_id: jwt_payload.id});
        if(user){
            return done( null, user)
        }else{
            return done(null, false)
        }

    }catch(err){
        return done(err, false)
    }

    }
));

exports.verifyUser = passport.authenticate('jwt', {session: false});
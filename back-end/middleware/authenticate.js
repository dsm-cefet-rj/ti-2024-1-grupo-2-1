var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Usuarios = require('../model/usuarios');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken'); // utiliza para criar, logar e verificar o token

var config = require('../config.js')

passport.use( new LocalStrategy( Usuarios.authenticate()));
passport.serializeUser(Usuarios.serializeUser());
passport.deserializeUser(Usuarios.deserializeUser());

exports.getToken = function(user){
    return jwt.sign(user, config.secretKey,{expiresIn:3600});
}

var opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use( new JwtStrategy(opts, //cria um middleware com a estrategia do jsonToken
    (jwt_payload, done)=>{
        console.log('JWT payload: ', jwt_payload);
        Usuarios.findOne({_id:jwt_payload._id}, ( err, user)=>{ // utiliza do mongoose para localizar um usuario atraves do id
            if(err){
                return done(err, false);
            }else if(user){
                return done(null,user);
            }else{
                return done(null, false);
            }
        });
    }
));

exports.verifyUser = passport.authenticate('jwt', {session: false});
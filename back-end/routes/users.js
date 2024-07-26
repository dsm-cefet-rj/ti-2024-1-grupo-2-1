var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Usuarios = require('../model/usuarios');
router.use(bodyParser.json())

/* GET users listing. */
router.route('/')
.get(async(req, res, next) => {

  try{
    const UsuariosBD = await Usuarios.find({}).maxTimeMS(5000);
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(UsuariosBD);
  }
  catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
})
.post((req, res, next) => {
  Usuarios.create(req.body)
  .then((usuario) => {
    console.log('Usuário cadastrado', usuario);
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(usuario);
  }, (err) => next(err))
  .catch((err) => next(err))
})

module.exports = router;

var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Usuarios = require('../model/usuarios');
router.use(bodyParser.json())

/* GET users listing. */
router.route('/')
.get(async(req, res, next) => {

  const {email, senha} = req.query;

  try{
    const UsuariosBD = await Usuarios.find({email, senha}).maxTimeMS(5000);
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

router.route('/:id')
.put((req, res, next) => {

  Usuarios.findByIdAndUpdate({_id: req.params.id}, req.body).then((usuario) => {
    console.log("Update de usuário, id: ", req.body.id);
    console.log("Infos: ", req.body)
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(req.body);
  }, (err) => next(err))
  .catch((err) => next(err))
})

module.exports = router;

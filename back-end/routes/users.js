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

.post(async (req, res, next) => {

  try{
    console.log(req.body);

    const existingEmailArray = await Usuarios.find({email: req.body.email});
    const existingEmail = existingEmailArray[0];

    if(existingEmail != undefined){
      console.log("Email já possui cadastro, operação cancelada!");
      res.setHeader('Content-type', 'application/json');
      return res.status(400).send({message: "Este email já está cadastrado!"})
    }

    Usuarios.create(req.body).then((usuario) => {
      console.log("Usuário cadastrado, infos: ", usuario);
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json');
      res.json(usuario);
      
    })
  } catch(error){
    return res.status(400).send({
      error: error,
      message: 'Ocorreu um erro na criação de usuario'
  });
  } 
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

.delete((req, res, next) => {
  Usuarios.findByIdAndDelete({_id: req.params.id}, req.body).then((usuario) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(req.body);
  }, (err) => next(err))
  .catch((err) => next(err))
})

module.exports = router;

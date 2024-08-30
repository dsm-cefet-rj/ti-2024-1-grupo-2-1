var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Usuarios = require('../model/usuarios');
var passport = require('passport');
var authenticate = require('../middleware/authenticate');
router.use(bodyParser.json())


router.post('/signup',(req, res, next)=>{
  Usuarios.register( new Usuarios({email: req.body.email, nome: req.body.nome}), req.body.senha,
  (err, user) =>{
    console.log(req.body)
    console.log("passou aqui 1", req.body)
    if(err){
      res.status(500);
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    } else{
      console.log("passou aqui 2");
      passport.authenticate('local')(req, res, ( )=>{
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
          success: true,
          status: 'Registration Successful'
        })
      })
    }
  }
)});

router.post('/login', passport.authenticate('local', { session: false}), (req, res)=>{
  var token = authenticate.getToken({_id: req.user._id});
  // console.log(req);
  res.status(200).json({
    _id: req.user._id,
    success: true,
    token: token,
    user:req.user,
    status: 'Registration Successful'
  })
});

router.get('/logout', (req, res) => {
  if(req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  }else{
    var err = new Error("Você não está logado");
    err.status = 403;
    next(err);
  }
})

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

// .post(async (req, res, next) => {

//   try{
//     console.log(req.body);

//     const existingEmailArray = await Usuarios.find({email: req.body.email});
//     const existingEmail = existingEmailArray[0];

//     if(existingEmail != undefined){
//       console.log("Email já possui cadastro, operação cancelada!");
//       res.setHeader('Content-type', 'application/json');
//       return res.status(409).send({message: "Este email já está cadastrado!"})
//     }

//     Usuarios.create(req.body).then((usuario) => {
//       console.log("Usuário cadastrado, infos: ", usuario);
//       res.statusCode = 200;
//       res.setHeader('Content-type', 'application/json');
//       res.json(usuario);
      
//     })
//   } catch(error){
//     return res.status(400).send({
//       error: error,
//       message: 'Ocorreu um erro na criação de usuario'
//   });
//   } 
// })

router.route('/:id')
.put((req, res, next) => {
  const {nome} = req.body.nome;
  const {email} = req.body.email;
  Usuarios.findById({_id: req.params.id}).then((usuario) => {
    
    if(usuario){
      usuario.setPassword(req.body.senha, function(){
        usuario.email = req.body.email;
        usuario.nome = req.body.nome;
        usuario.save();
      });
    }
    
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

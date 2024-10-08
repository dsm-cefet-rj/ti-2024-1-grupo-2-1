var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Animais = require('../model/animais');
var authenticate = require('../middleware/authenticate');
const upload = require('../middleware/uploadImage');
const fs = require("fs")
router.use(bodyParser.json());

/* GET users listing. */
router.route('/')
  .get(async (req, res, next) => {

    try {
      const AnimaisBD = await Animais.find({}).maxTimeMS(3000);
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json');
      res.json(AnimaisBD);
    }
    catch (err) {
      err = {};
      res.statusCode = 404;
      res.json(err);
    }
  })
  .post(authenticate.verifyJwt,upload.single("file"), async (req, res, next) => {
    console.log(req.file)
    console.log(req.body)
      const{nome,tipo,porte,idade,sexo,historia}=req.body;
      const file = req.file.path;
      // const path = file.replace(/\\/g, "/");
      // const caminho = path.split('/')[4];
    Animais.create({nome,tipo,porte,idade,sexo,historia, file:file,})
      .then((animal) => {
        console.log('animal criado', animal);
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(animal);
      }, (err) => next(err))
      .catch((err) => next(err))

  })

router.route('/:id')
  .get(async (req, res, next) => {
    let err;
    res.setHeader('Content-type', 'application/json');
    try {
      const animais = Animais.findOne({ _id: req.params.id })
      if (animais[0] !== null) {
        res.statusCode = 200;
        res.json(animais[0]);
      } else {
        err = {}
        err.statusCode = 404;
        res.json(err);
      }
    } catch (errParam) {
      console.log(errParam)
      //err = new Error("Animal" + req.params.id+ "não encontrado");
      err.statusCode = 404;
      res.json(errParam);
    }


  })
  .delete(authenticate.verifyJwt, async (req, res, next) => {

    Animais.findByIdAndDelete(req.params.id)
      .then((animal) => {
        fs.unlinkSync(animal.file)
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(animal.id);

      }, (err) => next(err))
      .catch((err) => next(err));
    // animais = animais.filter(function(value,index,arr){
    //   return value.id != req.params.id
    // });
  })
  .put(authenticate.verifyJwt, upload.single("file"), async (req, res, next) => {
    console.log(req.file)
    console.log(req.body)
    if(req.file){
      const{nome,tipo,porte,idade,sexo,historia}=req.body;
      const file = req.file.path;
      Animais.findByIdAndUpdate({ _id: req.params.id }, 
        {nome,tipo,porte,idade,sexo,historia, file:file,})
        .then((animal) => {
          res.statusCode = 200;
          res.setHeader('Content-type', 'application/json');
          res.json(animal);
        }, (err) => next(err))
        .catch((err) => next(err));
    }else{
      const{nome,tipo,porte,idade,sexo,historia,file}=req.body;
      Animais.findByIdAndUpdate({ _id: req.params.id }, 
        {nome,tipo,porte,idade,sexo,historia, file:file,})
        .then((animal) => {
          res.statusCode = 200;
          res.setHeader('Content-type', 'application/json');
          res.json(animal);
        }, (err) => next(err))
        .catch((err) => next(err));
    }
  })
  .patch(authenticate.verifyJwt, async (req, res, next) => {
    const{adopted} = req.body;
    Animais.findByIdAndUpdate({ _id: req.params.id }, 
      {adopted:adopted})
      .then((animal) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        console.log(animal);
        console.log(adopted);
        res.json(animal);
      }, (err) => next(err))
      .catch((err) => next(err));
  })

module.exports = router;

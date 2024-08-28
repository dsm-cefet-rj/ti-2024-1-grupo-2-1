var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Animais = require('../model/animais');
var authenticate = require('../middleware/authenticate');
router.use(bodyParser.json());

/* GET users listing. */
router.route('/')
.get(async(req, res, next) => {
  
 try{ 
  const AnimaisBD = await Animais.find({}).maxTimeMS(3000);
  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.json(AnimaisBD);
  }
  catch(err){
    err={};
    res.statusCode = 404;
    res.json(err);
  } 
})
.post(authenticate.verifyJwt,async(req,res, next) =>{

  Animais.create(req.body)
  .then((animal)=>{
    console.log('animal criado',animal);
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(animal);
  }, (err) => next(err))
  .catch((err) =>next(err))
  
})

router.route('/:id')
.get(async(req, res, next) => {
  let err;
  res.setHeader('Content-type', 'application/json');
try{
  const animais = Animais.findOne({_id: req.params.id})
  if(animais[0] !== null){
    res.statusCode = 200;
    res.json(animais[0]);
  }else{
    err = {}
    err.statusCode = 404;
    res.json(err);
  }
}catch(errParam){
  console.log(errParam)
  //err = new Error("Animal" + req.params.id+ "não encontrado");
  err.statusCode = 404;
  res.json(errParam);
}


})
.delete(authenticate.verifyJwt,async(req, res, next)=> {

  Animais.findByIdAndDelete(req.params.id)
  .then((animal)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(animal.id);

  }, (err)=> next(err))
  .catch((err)=>next(err));
  // animais = animais.filter(function(value,index,arr){
  //   return value.id != req.params.id
  // });
})
.put(authenticate.verifyJwt,async(req, res, next)=> {
  Animais.findByIdAndUpdate({_id: req.params.id}, req.body)
  .then((animal)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(req.body);
  }, (err)=> next(err))
  .catch((err)=>next(err));
  // let index= animais.map(p=>p.id).indexOf(req.params.id)
  // animais.splice(index, 1, req.body)
})

module.exports = router;

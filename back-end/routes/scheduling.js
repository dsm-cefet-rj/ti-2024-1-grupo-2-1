var express = require('express');
var router = express.Router()
const bodyParser = require('body-parser');
const Agendamentos = require('../model/agendamentos');
router.use(bodyParser.json());


router.route('/')
.get(async(req, res, next) => {
  
    try{ 
     const AgendamentosBD = await Agendamentos.find({}).maxTimeMS(3000);
     res.statusCode = 200;
     res.setHeader('Content-type', 'application/json');
     res.json(AgendamentosBD);
    }
    catch(err){
       err={};
       res.statusCode = 404;
       res.json(err);
    } 
})

.post((req, res, next) => {
    Agendamentos.create(req.body).then((agendamento) => {
        console.log("Registro de agendamento gerado, infos: ", agendamento);
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(agendamento);
    }, (err) => next(err))
    .catch((err) =>next(err))
})

router.route('/:id')
.delete((req, res, next)=> {

    Agendamentos.findByIdAndDelete(req.params.id)
    .then((agendamento)=>{
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json');
      res.json(agendamento.id);
  
    }, (err)=> next(err))
    .catch((err)=>next(err));
})
module.exports = router;
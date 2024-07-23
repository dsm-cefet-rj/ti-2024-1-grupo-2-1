var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Animais = require('../model/animais');
router.use(bodyParser.json());


let animais = [ 
  {
    "id": 1,
    "isfav": false,
    "img": "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc",
    "nome": "Flavio",
    "tipo": "Cachorro",
    "porte": "Grande",
    "sexo": "Macho",
    "idade": "5 anos",
    "história": "Flavio é um cachorro amável que foi encontrado vagando pelas ruas em busca de comida e abrigo. Ele tem uma personalidade gentil e brincalhona, e rapidamente conquista o coração de todos que o conhecem. Apesar de ter tido um passado difícil, Flavio é extremamente leal e está pronto para encontrar um lar amoroso onde possa receber todo o carinho e cuidado que merece."
  },
  {
    "id": 2,
    "img": "https://www.petz.com.br/blog/wp-content/uploads/2021/11/tipos-de-pitbull3-1280x720.jpg",
    "isfav": false,
    "nome": "Vini",
    "tipo": "Cachorro",
    "porte": "Pequeno",
    "sexo": "Macho",
    "idade": "8 anos",
    "história": "Conheça o adorável Vini: Um cachorro de coração valente à espera de um lar amoroso! Vini chegou até nós após enfrentar muitos desafios em sua jornada pela vida. Com seus 8 anos de idade, ele exibe uma determinação e uma força de espírito que são verdadeiramente inspiradoras. Apesar das dificuldades que enfrentou, Vini mantém um coração cheio de amor e uma disposição alegre para todos que cruzam seu caminho. Ele adora brincar, dar longos passeios e desfrutar de momentos de carinho e afeto. Vini é do tipo que ilumina qualquer ambiente com sua presença contagiante e seu espírito brincalhão. Se você está em busca de um amigo leal e cheio de energia para compartilhar suas aventuras, Vini é o companheiro perfeito. Ao adotá-lo, você estará não apenas oferecendo a ele um lar seguro e acolhedor, mas também ganhando um amigo fiel para a vida toda. Venha conhecer o adorável Vini e descubra como ele pode trazer alegria e amor para sua vida todos os dias!"
  }

]

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
.post((req,res, next) =>{

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
  const animais = Animais.findById(req.params.id)
  if(animais != null){
    res.statusCode = 200;
    res.json(animais);
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
.delete((req, res, next)=> {

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
.put((req, res, next)=> {
  Animais.findByIdAndUpdate(req.params.id,{
    $set:req.body
  },{ new:true})
  .then((animal)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(animal);
  }, (err)=> next(err))
  .catch((err)=>next(err));
  // let index= animais.map(p=>p.id).indexOf(req.params.id)
  // animais.splice(index, 1, req.body)
})

module.exports = router;

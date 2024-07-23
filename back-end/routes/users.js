var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.json([
    {
      "nome": "Adm",
      "email": "admin@admin",
      "senha": "admin",
      "id": "0000"
    }
  
  ]);
});

module.exports = router;

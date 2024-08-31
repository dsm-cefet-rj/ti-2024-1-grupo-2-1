var express = require('express');
var router = express.Router();
// const bodyParser = require('body-parser')
// var authenticate = require('../middleware/authenticate');
// router.use(bodyParser.json());
// const picture = require('../model/picture');
const upload = require('../middleware/uploadImage');
const PictureController = require("../Controllers/pictureController")



// router.route('/').get(authenticate.verifyJwt, async (req, res,) => {
//     if(req.file){
//         return  res.json(req.file);
//     }

//     return res.status(400).json({
//         error:true,
//         mensagem: "Erro: Upload não realizado"
//     })
// });

router.post("/", upload.single("file") , PictureController.create)
router.get('/', PictureController.findAll)
router.delete("/:id", PictureController.deleteOne)

module.exports = router;
    // if(req.file){
    //     res.statusCode = 200;
    //     res.setHeader('Content-type', 'application/json');
    //     return  res.json(req.file);
    // }
    // console.log( "deu merda");
    // return res.status(400).json({
    //     error:true,
    //     mensagem: "Erro: Upload não realizado"
    // })
// }

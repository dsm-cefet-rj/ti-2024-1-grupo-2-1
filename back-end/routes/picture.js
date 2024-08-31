var express = require('express');
var router = express.Router();
// const bodyParser = require('body-parser')
// var authenticate = require('../middleware/authenticate');
// router.use(bodyParser.json());
// const picture = require('../model/picture');
const upload = require('../middleware/uploadImage');
const PictureController = require("../Controllers/pictureController")

router.post("/", upload.single("file") , PictureController.create)
router.get('/', PictureController.findAll)
router.delete("/:id", PictureController.deleteOne)

module.exports = router;

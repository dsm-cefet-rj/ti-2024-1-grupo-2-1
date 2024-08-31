const multer = require('multer');
 const path = require("path")

const storage = multer.diskStorage({
        destination:function (req, file, cb){
        cb(null, '../front-end/src/images');
        },
        filename:function(req, file, cb){
            const uniqueSuffix = Date.now().toString() + path.extname(file.originalname);
            cb(null, uniqueSuffix);
        }
        // fileFilter: (req, file, cb)=>{
        //     const extensãoImg = ['image/png', 'image/jpg','image/jpeg' ].find
        //     (formato=>formato ==file.mimetype);
            
        //     if(extensãoImg){
        //         return cb(null, true);
        //     }
        //     return cb(null, false);
        // }
    });
    
const upload = multer({storage})

module.exports = upload;
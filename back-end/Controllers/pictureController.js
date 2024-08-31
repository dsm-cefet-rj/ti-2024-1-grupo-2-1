const Picture = require("../model/picture");
const fs = require("fs")

exports.create = async (req, res) =>{
    console.log(req.file)
    console.log(req.body)
    try{
        const{name, idAnimal} = req.body

        const file = req.file;
        console.log(file);
        // Picture.create({name, idAnimal, src:file.path}).then((foto) => {
        //     console.log("Registro de foto gerado, infos: ", foto);
        //     res.statusCode = 200;
        //     res.setHeader('Content-type', 'application/json');
        //     res.json(foto);
        // })
        const picture = new Picture({
            name,
            idAnimal,
            file: file.path,
        })
        console.log("passou aqui")
        console.log(picture)
         await picture.save()

        res.json({picture, message: "imagem salva"})
    }catch(err){
        res.status(500).json({message: "deu ruim"})
    }
}

exports.findAll = async (req, res) => {
    try {
        const pictures = await Picture.find();
        res.json(pictures);
    } catch (error) {
        res.status(500).json({message: "erro ao buscar as imagens"});
        
    }
}

exports.deleteOne = async (req, res ) => {
    try {
        const picture = await Picture.findById(req.params.id)

        if(!picture){
            return res.status(400).json({ message: "imagem não encontrada"})
        }
        console.log(picture)
        fs.unlinkSync(picture.src)

        
        await Picture.findByIdAndDelete({_id: req.params.id}, req.body)
            // res.statusCode = 200;
            // res.setHeader('Content-type', 'application/json');
            // res.json(req.body);
        // await picture.remove()
        res.json({message: "imagem removida com sucesso"});
    } catch (error) {
        res.status(500).json({message: "erro ao excluir a imagem"});
    }
}
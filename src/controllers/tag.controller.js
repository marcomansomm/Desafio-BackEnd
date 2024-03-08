const Tag = require('../entities/tag.entity');

module.exports = {
    get: async (req, res) => {
        const tags = await Tag.find();
        if(!tags){
            return res.status(404).json({message: 'nenhuma tag encontrada'})
        }
        return res.json({tags ,message: 'buscando todas as tags'});
    },
    findById: async (req, res) => {
        const id = req.params.id;
        console.log(id);
        const tagEncontrada = await Tag.findById(id);
        if(!tagEncontrada){
            return res.status(404).json({message: 'nenhuma tag encontrada'})
        }
        return res.json({tagEncontrada, message: "buscando por id tag"});
    },
    post: async (req, res) => {
        const { name, color } = req.body;
        const newTag = Tag({name, color});
        await newTag.save();

        return res.json({newTag, message: 'criando tag'});
    },
    put: async (req, res) => {
        const { name, color } = req.body;
        const id = req.params.id;
        const updatedTag = await Tag.findByIdAndUpdate(id, {name, color});
        if(!updatedTag){
            return res.status(404).json({message: 'nenhuma tag encontrada'})
        }
        return res.json({updatedTag, message: 'atualizando tag'});
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const deletedTag = await Tag.findByIdAndDelete(id);
        if(!deletedTag){
            return res.status(404).json({message: 'nenhuma tag encontrada'})
        }
        return res.json({deletedTag, message: 'atualizando tag'});
    }
}
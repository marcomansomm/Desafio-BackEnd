const Tag = require('../entities/tag.entity');

module.exports = {
    async get(req, res) {
        try {
            const tags = await Tag.find();

            if(!tags) {
                return res.status(404).json({message: 'Tags not found!'});
            }

            return res.status(200).json({tags});
        } catch (error) {
            return res.status(500).json({message: 'Internal server error!'});
        }
        
    },
    async create(req, res){
        try {
            const { name, color } = req.body;
            const newTag = new Tag({ name, color });

            newTag.save();

            return res.status(201).json({newTag, message: 'Tag created!'});
        } catch (error) {
            return res.status(500).json({message: 'Internal server error!'});
        }
        
    },
    async update(req, res){
        try {
            const id = req.params.id;
            const { name, color } = req.body;
            const updatedTag = await Tag.findByIdAndUpdate(id, { name, color });
            
            if(!updatedTag){
                return res.status(404).json({message: 'Tag not found!'});
            }
            
            return res.status(200).json({updatedTag, message: 'Tag updated!'});
        } catch (error) {
            return res.status(500).json({message: 'Internal server error!'});
        }
    },
    async delete(req, res){
        try {
            const id = req.params.id;
            const deletedTag = await Tag.findByIdAndDelete(id);
            
            if(!deletedTag){
                return res.status(404).json({message: 'Tag not found!'});
            }
            
            return res.status(200).json({message: 'Tag deleted!'});
        } catch (error) {
            return res.status(500).json({message: 'Internal server error!'});
        }
    },
}
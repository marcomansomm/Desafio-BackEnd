const Tag = require('../entities/tag.entity');

module.exports = {
    async get(req, res) {
        const tags = await Tag.find();
        res.status(200).json({
            tags,
        });
    }
}
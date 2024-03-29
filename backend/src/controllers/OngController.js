const generateuniqueId = require('../utils/generateUniqueId');
const connetion = require('../database/connection');

module.exports = {
    async index(req, res) {
        const ongs = await connetion('ongs').select('*');
    
        return res.json(ongs);
    },

    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;

        const id = generateuniqueId();

        await connetion('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return res.json({ id });
    }
}
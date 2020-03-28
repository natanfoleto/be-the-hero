const req = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ong', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const res = await req(app)
        .post('/ongs')
        .send({
            name: "NASA",
            email: "apad@hotmail.com",
            whatsapp: "17992424418",
            city: "Jaborandi",
            uf: "SP"
        });

        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8);
    });
});
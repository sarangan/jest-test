const request = require('supertest');
const server = require('./app');


describe("test users route", () =>{

    it('it should calss', () =>{
        expect(1).toBe(1);
    })

    it('it should get all the users', async (done)=>{

        const response = await request(server).get('/users/12');
        expect(response.status).toBe(200);
        done();
            // request(server)
            // .get('/users')
            // .set('Accept', 'application/json')
            // //.expect('Content-Type', /json/)
            // .expect(200)
            // .end((err, res) => {
            //     if (err) throw err;
            //     done();
            // });
    });

    it('it should get 501 run delete', async(done) =>{
        const respone = await request(server).delete('/users/12');
        expect(respone.status).toBe(501);
        done();
    });
});
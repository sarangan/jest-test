let users = require('./mocking_jest');
let rp = require('request-promise');
const fs = require('fs');

jest.mock('request-promise');

describe('testing mocking jest', () =>{
    test('mocking jest', async ()=>{

        rp.get.mockResolvedValue({
            name: 1
        });

        let myusers = await users.getUsers();
        console.log('USERS');
        console.log(myusers);
        expect(myusers).toEqual({name: 1});
    });
});


describe('manual mock', () =>{
    test('mocking manual', (done)=>{

        jest.mock('fs');

        fs.readFile('./.gitignore', (err, data) =>{
            console.log(data.toString());
            done();
        });
    });
});
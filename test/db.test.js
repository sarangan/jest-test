const db =  require('../db');
const assert = require('chai').assert;
const sandbox = require('sinon').createSandbox();

describe('test mongo connect', () => {

    afterEach(()=>{
        sandbox.restore();
    });

   it('conect', async() =>{

        sandbox.stub(db, 'connect').resolves({a: 1});
        
        const connect = await db.connect();

        assert.deepEqual(connect, {a: 1});
    });
    
});

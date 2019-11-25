const model = require('../model');
const assert = require('chai').assert;
const sandbox = require('sinon').createSandbox();

describe('test mongo connect', () => {

    afterEach(()=>{
        sandbox.restore();
    });

   it('model', async() =>{

        sandbox.stub(model, 'find').resolves([1,2]);
        
        const connect = await model.find("DB", {});
        console.log(connect);
        assert.deepEqual(connect, [1,2]);

        assert(Array.isArray(connect), 'empty arrays are arrays');
    });
    
});

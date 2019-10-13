const forEach = require('./v8_lib');

describe('jest testing', ()=>{

    it('check for each function', () => {

        const mock_foreach = jest.fn( (i) => { return i * 2 } );

        forEach([1,2,3], mock_foreach);

        expect(mock_foreach.mock.calls.length).toBe(3);

        console.log(mock_foreach.mock.calls[1][0]);

        expect(mock_foreach.mock.calls[1][0]).toBe(2);

        expect(mock_foreach.mock.results[1].value).toBe(4);

    });

});
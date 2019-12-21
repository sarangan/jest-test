
function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
}

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

describe.only('ms test', ()=>{

    test('test jest', ()=>{
        // The mock function is called twice
        expect(mockCallback.mock.calls.length).toBe(2);
    });

});


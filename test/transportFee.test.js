describe('The transportFee function', function(){

    it('morning shift the transport cost is R20', function(){
        assert.equal(transportFee('morning'), 'R20');

});
    it( 'afternoon shift the transport cost is R10', function(){
       assert.equal(transportFee('afternoon'), 'R10');

});

it('otherwise return free', function(){
    assert.equal(transportFee('nightshift'), 'free');

});

});
describe('The transportFee function', function(){

    it('should return "R20" if it is a morning shift', function(){
        assert.equal(transportFee('morning'), 'R20');

});
    it( 'should return "R10" if it is a morning shift', function(){
       assert.equal(transportFee('afternoon'), 'R10');

});

it('otherwise return "free" if it is a nightshift', function(){
    assert.equal(transportFee('nightshift'), 'free');

});

});
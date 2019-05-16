describe('The fromWhere function', function(){

    it('should return "Belliville" if the reg number starts with CY', function(){
        assert.equal(fromWhere('CY'), 'Bellville');

});
    it('should return "Paarl" if the reg number starts with CJ', function(){
       assert.equal(fromWhere('CJ'), 'Paarl');

});

it('should return "Cape Town" if the reg number starts with CA', function(){
    assert.equal(fromWhere('CA'), 'Cape Town');

});

it('should return "Some other place!" if the reg number starts with CC', function(){
    assert.equal(fromWhere('CC'), 'Some other place!');

});

});
describe('The fromWhere function', function(){

    it('If the reg number starts with CY return Bellville', function(){
        assert.equal(fromWhere('CY'), 'Bellville');

});
    it('for CJ return Paarl', function(){
       assert.equal(fromWhere('CJ'), 'Paarl');

});

it('for CA return Cape Town', function(){
    assert.equal(fromWhere('CA'), 'Cape Town');

});

it('otherwise return Some other place!', function(){
    assert.equal(fromWhere('CC'), 'Some other place!');

});

});